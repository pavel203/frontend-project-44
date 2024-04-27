#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(range = 100) {
    return Math.floor(Math.random() * range);
}

function generateRoundData() {
    const operators = ['+', '-', '*'];
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operator = operators[getRandomInt(operators.length)];

    const question = `${num1} ${operator} ${num2}`;
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = String(num1 + num2);
            break;
        case '-':
            correctAnswer = String(num1 - num2);
            break;
        case '*':
            correctAnswer = String(num1 * num2);
            break;
        default:
            break;
    }

    return {question, correctAnswer};
}

const roundsCount = 3;

console.log('\nWelcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

for (let i = 0; i < roundsCount; i++) {
    const {question, correctAnswer} = generateRoundData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!\n`);
        break;
    }

    console.log('Correct!');
}
if (roundsCount === 3) {
    console.log(`Congratulations, ${name}!`);
}

