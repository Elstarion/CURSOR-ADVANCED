let firstNumber = prompt('Enter first number');
let secondNumber = prompt('Enter second number');

let result = 0;

while (!(Number.isInteger(+firstNumber) && Number.isInteger(+secondNumber)) || !firstNumber || !secondNumber) {
    alert('One of the inputs were not correct. Let`s try that again.');
    firstNumber = prompt('The first number is?');
    secondNumber = prompt('and the second is going to be?');
}

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const includeEvenNumbers = confirm('Include even numbers?');

if (firstNumber > secondNumber) {
    for (let i = firstNumber; i >= secondNumber; i--) {
        if (!includeEvenNumbers && i % 2 === 0) {
            continue;
        }

        result += i;
    }
} else {
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (!includeEvenNumbers && i % 2 === 0) {
            continue;
        }

        result += i;
    }
}

document.writeln(`The result is: ${result}`)