import { playPatrick, collectionBurgers, hearts, counter, gameStatistic, gameEnd, allAudio } from "./rendering.js";
class Statistic {
    countBurgers;
    constructor() {
        this.countBurgers = 0;
    }
    eatAndDead() {
        collectionBurgers.forEach((el, index) => {
            if (el.xDisposition === (playPatrick[0].xDisposition + 80)) {
                if ((el.yDisposition < 311) && (el.yDisposition > 305)) {
                    collectionBurgers.splice(index, 1);
                    if (el.poison) {
                        allAudio[0].play();
                        this.countBurgers += 1;
                    }
                    else {
                        allAudio[1].play();
                        setTimeout(() => { allAudio[3].play(); }, 500);
                        this.countBurgers -= 2;
                        const lifeStr = hearts.textContent;
                        const newLifeStr = lifeStr.slice(0, -1);
                        hearts.textContent = newLifeStr;
                        if (newLifeStr.length === 0) {
                            gameEnd[0] = false;
                        }
                        ;
                    }
                    ;
                    counter.textContent = String(this.countBurgers);
                }
                ;
            }
            ;
            if (el.yDisposition < 260) {
                collectionBurgers.splice(index, 1);
                if (el.poison) {
                    allAudio[3].play();
                    const lifeStr = hearts.textContent;
                    const newLifeStr = lifeStr.slice(0, -1);
                    hearts.textContent = newLifeStr;
                    if (newLifeStr.length === 0) {
                        gameEnd[0] = false;
                    }
                    ;
                }
                ;
            }
            ;
        });
    }
}
;
const newStatistic = new Statistic();
gameStatistic.push(newStatistic);
