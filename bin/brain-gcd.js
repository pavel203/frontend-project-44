#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для вычисления НОД двух чисел
const gcd = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

// Функция для генерации случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Основная функция игры
const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    const rounds = 3;
    for (let i = 0; i < rounds; i++) {
        const num1 = getRandomNumber(1, 100);
        const num2 = getRandomNumber(1, 100);
        console.log(`Question: ${num1} ${num2}`);
        const correctAnswer = gcd(num1, num2);
        const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

playGame();
