import gameState from '../BobTalk.js';
import { collectionBonuses } from './collectionAchievements.js';
// import { lamp } from './store/main.js';
export const hack = [];
export let sleepTimer;

export const goToSleep = () => {
    gameState.bobSleep = true;
    let [playRoom, kitchen, bathRoom, bedRoom] = collectionBonuses.pleasureLevels

    sleepTimer = setInterval(() => {
        if (bedRoom >= 0 && bedRoom < 100) {
            bedRoom += 1;
            // bathRoom += 1;
            const updatePleasureLevels = new CustomEvent('moneyUpdate', {
                detail: {
                    pleasureLevels:[playRoom, kitchen, bathRoom, bedRoom]
                }
            });
            document.dispatchEvent(updatePleasureLevels);
        }
    }, 100)
};

export const wakeUp = () => {
    clearInterval(sleepTimer);
    hack[0].state = 1
    gameState.bobSleep = false;
};