'use strict';

(() => {
    const gameMarbles = () => {
        const countBalls = {
            gamer: 5,
            bot: 5,
        };

        const startUser = () => {
            const userNum = +prompt(`Угадай число от 1 до ${countBalls.gamer}`);
            console.log(userNum);

            const userAnswer = userNum % 2 === 0 ? 0 : 1;
            console.log(userAnswer);

            const botAnswer = Math.floor(Math.random() * 2);
            console.log(botAnswer);

            if (userAnswer === botAnswer) {
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
        };
        startUser();

        const startBot = () => {
            const botNum = Math.ceil(Math.random() * (countBalls.bot + 1));
            console.log(botNum);

            const botAnswer2 = botNum % 2 === 0 ? 0 : 1;
            console.log(botAnswer2);

            const userQueston = confirm(`Число четное?`);
            const userAnswer2 = userQueston === true ? 0 : 1;
            console.log(userAnswer2);

            if (userAnswer2 === botAnswer2) {
                countBalls.gamer += botNum;
                countBalls.bot -= botNum;
                alert(`Результат: 
                Вы: ${countBalls.gamer} Бот: ${countBalls.bot}`);
            } else {
                countBalls.gamer -= botNum;
                countBalls.bot += botNum;
                alert(`Результат: 
                Вы: ${countBalls.gamer} Бот: ${countBalls.bot}`);
            }
        };
        startBot();

        const startGames = () => {
            if (countBalls.gamer > 0 && countBalls.bot > 0) {
                startUser();
                startBot();
            }
            if (countBalls.gamer <= 0) {
                alert(`Вы проиграли!`);
                return;
            }
            if (countBalls.bot <= 0) {
                alert(`Вы выиграли!`);
                return;
            }
        };
        startGames();
    };

    window.newGameMarbles = gameMarbles;
})();
