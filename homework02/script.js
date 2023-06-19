let firstNumber = Number(prompt('Enter first number'));

while (firstNumber <= 0 || !Number.isInteger(firstNumber)) {
    firstNumber = Number(prompt('Enter integer greater than 0'));
}

let secondNumber = Number(prompt('Enter second number'));

while (secondNumber <= firstNumber || !Number.isInteger(secondNumber)) {
    secondNumber = Number(prompt(`Enter integer greater than ${firstNumber}`));
}

let result = 0;
const skipEvenNumbers = confirm('Skip even numbers?');

for (let i = firstNumber; i <= secondNumber; i++) {
    if (skipEvenNumbers) {
        result += i % 2 ? i : 0;
    } else {
        result += i;
    }
}

document.writeln(`The result is: ${result}`)