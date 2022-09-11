'use strict';

(() => {
    const gameMarbles = () => {
        const countBalls = {
            gamer: 5,
            bot: 5,
        };

        const startGameMarbles = () => {
            const userNum = +prompt(`Угадай число от 1 до ${countBalls.gamer}`);
            console.log(userNum);

            const userAnswer = userNum % 2 === 0 ? 0 : 1;
            console.log(userAnswer);

            const botNum = Math.floor(Math.random() * 2);
            console.log(botNum);

            const findLeader = () => {
                if (countBalls.gamer <= 0) {
                    alert(`Вы проиграли!`);
                    return;
                }
                if (countBalls.bot <= 0) {
                    alert(`Вы выиграли!`);
                    return;
                }
                if (userAnswer === botNum) {
                    countBalls.gamer -= userNum;
                    countBalls.bot += userNum;
                    alert(`Результат: 
                    Вы: ${countBalls.gamer} Бот: ${countBalls.bot}`);
                } else {
                    countBalls.gamer += userNum;
                    countBalls.bot -= userNum;
                    alert(`Результат: 
                    Вы: ${countBalls.gamer} Бот: ${countBalls.bot}`);
                }
                if (countBalls.gamer > 0 && countBalls.bot > 0) {
                    startGameMarbles();
                    findLeader();
                } else {
                    return;
                }
            };
            findLeader();
        };
        return startGameMarbles();
    };
    // gameMarbles();

    window.newGameMarbles = gameMarbles;
})();
