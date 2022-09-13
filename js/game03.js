'use strict';

(() => {
    const figures = ['камень', 'ножницы', 'бумага'];

    const word = {
        exit: 'Вы точно хотите выйти? да/нет',
        total: 'Результат:',
        you: 'Вы:',
        comp: 'Компьютер:',
        correct: 'Введите корректные данные',
    };

    const games = () => {
        const result = {
            player: 0,
            computer: 0,
        };

        const countBalls = {
            gamer: 5,
            bot: 5,
        };

        const startGame = () => {
            const answer = prompt(`${figures.join(', ')} ?`);
            if (answer === null) {
                const exit = confirm(`${word.exit}`);
                if (exit === true) {
                    alert(`${word.total} 
                    ${word.you} ${result.player} 
                    ${word.comp} ${result.computer}`);
                    result.player = false;
                    result.computer = false;
                    console.log(result.player);
                    console.log(result.computer);
                    return;
                } else {
                    return startGame();
                }
            }

            const userIndex = figures.indexOf(answer.toLowerCase());

            if (userIndex === -1) {
                alert(`${word.correct}`);
                startGame();
            }
            console.log(userIndex);

            const userChoise = figures[userIndex];
            console.log(userChoise);

            const computerIndex = Math.floor(Math.random() * 3);
            console.log(computerIndex);

            const computerChoise = figures[computerIndex];
            console.log(computerChoise);

            const findChampion = () => {
                if (result.player === false && result.computer === false) {
                    return;
                }
                if (userIndex === computerIndex) {
                    result.player += 1;
                    result.computer += 1;
                    alert(`${word.you} ${userChoise}
                    ${word.comp} ${computerChoise}
                    ${word.total}
                    ${word.you} ${result.player}
                    ${word.comp} ${result.computer}`);
                    startGame();
                    findChampion();
                }
                if (userIndex === 0 && computerIndex === 1 ||
                    userIndex === 1 && computerIndex === 2 ||
                    userIndex === 2 && computerIndex === 0) {
                    result.player += 1;
                    result.computer += 0;
                    alert(`${word.you} ${userChoise}
                    ${word.comp} ${computerChoise}
                    ${word.total}
                    ${word.you} ${result.player}
                    ${word.comp} ${result.computer}`);
                } else {
                    result.player += 0;
                    result.computer += 1;
                    alert(`${word.you} ${userChoise}
                    ${word.comp} ${computerChoise}
                    ${word.total}
                    ${word.you} ${result.player}
                    ${word.comp} ${result.computer}`);
                }
            };
            findChampion();

            const startUser = () => {
                const userNum =
                +prompt(`Угадай число от 1 до ${countBalls.gamer}`);
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

            const startMarbles = () => {
                if (result.player === false && result.computer === false) {
                    return;
                }
                if (result.player > result.computer) {
                    startUser();
                    startBot();
                    if (countBalls.gamer > 0 && countBalls.bot > 0) {
                        startUser();
                    }
                    if (countBalls.gamer > 0 && countBalls.bot > 0) {
                        startBot();
                    }
                    if (countBalls.gamer <= 0) {
                        const exitGame =
                        confirm(`Вы проиграли! Сыграем еще раз?`);
                        if (exitGame === true) {
                            result.player = 0;
                            result.computer = 0;
                            countBalls.gamer = 5;
                            countBalls.bot = 5;
                            startGame();
                        } else {
                            result.player = false;
                            result.computer = false;
                            return;
                        }
                    }
                    if (countBalls.bot <= 0) {
                        const exitGame =
                        confirm(`Вы выиграли! Сыграем еще раз?`);
                        if (exitGame === true) {
                            result.player = 0;
                            result.computer = 0;
                            countBalls.gamer = 5;
                            countBalls.bot = 5;
                            startGame();
                        } else {
                            result.player = false;
                            result.computer = false;
                            return;
                        }
                    }
                } else {
                    startBot();
                    startUser();
                    if (countBalls.gamer > 0 && countBalls.bot > 0) {
                        startBot();
                    }
                    if (countBalls.gamer > 0 && countBalls.bot > 0) {
                        startUser();
                    }
                    if (countBalls.gamer <= 0) {
                        const exitGame =
                        confirm(`Вы проиграли! Сыграем еще раз?`);
                        if (exitGame === true) {
                            result.player = 0;
                            result.computer = 0;
                            countBalls.gamer = 5;
                            countBalls.bot = 5;
                            startGame();
                        } else {
                            result.player = false;
                            result.computer = false;
                            return;
                        }
                    }
                    if (countBalls.bot <= 0) {
                        const exitGame =
                        confirm(`Вы выиграли! Сыграем еще раз?`);
                        if (exitGame === true) {
                            result.player = 0;
                            result.computer = 0;
                            countBalls.gamer = 5;
                            countBalls.bot = 5;
                            startGame();
                        } else {
                            result.player = false;
                            result.computer = false;
                            return;
                        }
                    }
                }
                startMarbles();
            };
            startMarbles();
        };
        return startGame();
    };
    window.twoGames = games;
})();
