
const lowpass = {
    frequency: 110,
    type: "lowpass",
    Q: 0,
}
const highpass = {
    frequency: 'C6',
    type: "highpass",
    Q: 0,
}
let vol;
let delay;
let bitCrusher;
let distortion;
let pitchShift;
let filterHighpass;
let meter;
let filterLowpass;
let mic;

let gameState;
export default gameState  = {
    bobOnScreen: true,
    bobSleep: false,
    bobBusy: false,
    // bobHungry: false,
    // bobEat: false,
};

if (navigator.onLine) {
    vol = new Tone.Volume(40).toDestination()
    delay = new Tone.Delay(2);
    bitCrusher = new Tone.BitCrusher(10);
    distortion = new Tone.Distortion(0.5);
    pitchShift = new Tone.PitchShift(6);
    filterHighpass = new Tone.Filter();
    filterHighpass.set(highpass);
    meter = new Tone.Meter();
    filterLowpass = new Tone.Filter();
    filterLowpass.set(lowpass);
    mic = new Tone.UserMedia();
}


export class BobTalk {
    noiseAnalyser;
    audioContext;
    audioBuffer;
    audioBufferSourceNode;
    mediaStreamSource;
    scriptProcessor;
    currentLevel;
    triggerLevel = -20;
    SecondTriggerLevel = -35;
    triggerDuration = 0.1;
    noiseTriggered = false;
    timerStarted = false;
    isPlaying = false;
    constructor(data = {
        button: '', // в конструктор необходимо передать кнопку после взаимодействия с которой будет запущен модуль

    }) {
        this.data = data;
        this.noiseAnalyser = this.initNoiseAnalyser();
        this.timer;
    }
    initNoiseAnalyser = async () => {
        const audioContext = new AudioContext();
        const microphoneStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const source = audioContext.createMediaStreamSource(microphoneStream);
        const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
        source.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        scriptProcessor.onaudioprocess = event => {
            const inputBuffer = event.inputBuffer;
            const inputData = inputBuffer.getChannelData(0);
            let sum = 0;

            for (let i = 0; i < inputData.length; i++) {
                sum += inputData[i] * inputData[i];
            }

            const rms = Math.sqrt(sum / inputData.length);
            const db = 20 * Math.log10(rms);
            this.currentLevel = db;
        };
    }

    startMonitoring = async () => {
        if (!this.timerStarted) {
            try {
                // Запрашиваем доступ к микрофону
                await mic.open();
                console.log('Microphone is ready');
                // Подключаем анализатор к микрофону
                mic.connect(meter);
                // Запускаем проверку уровня шума
                setInterval(this.checkNoiseLevel, 50);
            } catch (error) {
                console.error('Could not open microphone:', error);
            }
        }
    }


    checkNoiseLevel = async () => {
        if (!gameState.bobOnScreen || gameState.bobBusy || this.isPlaying) { 
            return;
        }

        if (this.currentLevel >= this.triggerLevel && !this.noiseTriggered) {
            this.noiseTriggered = true;
            console.log('noiseTriggered');
        }

        if (this.noiseTriggered && !this.timerStarted && this.currentLevel >= this.triggerLevel) {
            this.timerStarted = true;
            this.startRecording();
            console.log('secondEvent');
        }

        if (this.noiseTriggered && this.currentLevel < this.SecondTriggerLevel) {
            this.stopRecordingAndPlayback()
            this.timerStarted = false;
            this.noiseTriggered = false;
            console.log('thirdEvent');
        }
    }

    startRecording = async () => {
        if (this.audioContext) {
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
        this.scriptProcessor = this.audioContext.createScriptProcessor(4096, 1, 1);

        const numberOfChannels = 1;
        const lengthInSamples = 4096;
        const sampleRate = this.audioContext.sampleRate;
        this.audioBuffer = this.audioContext.createBuffer(numberOfChannels, lengthInSamples, sampleRate);

        this.scriptProcessor.addEventListener('audioprocess', (event) => {
            const inputBuffer = event.inputBuffer;
            const outputBuffer = event.outputBuffer;

            const inputData = inputBuffer.getChannelData(0);
            const outputData = outputBuffer.getChannelData(0);

            const newAudioBufferData = new Float32Array(this.audioBuffer.length + inputData.length);
            newAudioBufferData.set(this.audioBuffer.getChannelData(0), 0);
            newAudioBufferData.set(inputData, this.audioBuffer.length);

            const newAudioBuffer = this.audioContext.createBuffer(numberOfChannels, newAudioBufferData.length, sampleRate);
            newAudioBuffer.copyToChannel(newAudioBufferData, 0);

            this.audioBuffer = newAudioBuffer;

            for (let i = 0; i < outputBuffer.length; i++) {
                outputData[i] = inputData[i];
            }
        });
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = 0
        this.mediaStreamSource.connect(this.scriptProcessor);
        this.scriptProcessor.connect(gainNode)
        gainNode.connect(this.audioContext.destination);
    }

    stopRecordingAndPlayback = () => {
        if (!this.audioContext) {
            return;
        }
        this.mediaStreamSource.disconnect();
        this.scriptProcessor.disconnect();

        this.audioBufferSourceNode = this.audioContext.createBufferSource();
        this.audioBufferSourceNode.buffer = this.audioBuffer;

        const toneBufferSourse = new Tone.BufferSource(this.audioBufferSourceNode.buffer, () => {
        });
        toneBufferSourse.connect(bitCrusher);
        bitCrusher.connect(pitchShift);
        pitchShift.connect(distortion);
        distortion.connect(filterHighpass);
        filterHighpass.connect(filterLowpass);
        filterLowpass.connect(delay);
        delay.connect(vol);
        toneBufferSourse.start()
        this.audioBufferSourceNode.start(0);

        this.isPlaying = true; 

        this.audioBufferSourceNode.addEventListener('ended', () => {
            setTimeout(() => {
                this.audioBufferSourceNode.disconnect();
                this.audioContext.close();
                this.audioContext = null;
                this.isPlaying = false; 
            }, 1000);
        });
    }

}


let bob = null;
document.getElementById('startAudioModule').addEventListener('click', () => {
    if (navigator.onLine) {
        bob = new BobTalk();
        bob.startMonitoring()
        document.getElementById('startAudioModule').disabled = true;
    }
});
