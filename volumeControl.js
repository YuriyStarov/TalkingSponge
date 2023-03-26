document.addEventListener('DOMContentLoaded', () => {
    const volumeSlider = document.getElementById('volume');
    const volumeValue = document.getElementById('volumeValue');
  
    function setMediaVolume() {
      const mediaElements = document.querySelectorAll('audio, video');
  
      mediaElements.forEach((mediaElement) => {
        mediaElement.volume = volumeSlider.value;
      });
    }
  
    volumeSlider.addEventListener('input', () => {
      volumeValue.textContent = volumeSlider.value;
      setMediaVolume();
    });
    setMediaVolume()
  });
  