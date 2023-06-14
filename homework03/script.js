function getMaxDigit(number) {
    let maxDigit = -Infinity;
    let numberToString = number.toString();

    for (let i = 0; i < numberToString.length; i++) {
        if (numberToString[i] > maxDigit) {
            maxDigit = numberToString[i];
        }
    }

    return maxDigit;
}

// -----------------------------------------------------------------------------

function pow(base, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= base;
    }

    return result;
}

// -----------------------------------------------------------------------------

function formatName(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
}

// -----------------------------------------------------------------------------

function residualCash(number) {
    return number - number * 0.195
}

// -----------------------------------------------------------------------------

function getRandomNumber(a, b) {
    if (a > b) {
        return Math.floor(Math.random() * (a - b + 1) + b);
    }

    return Math.floor(Math.random() * (b - a + 1) + a);
}

// -----------------------------------------------------------------------------

function countLetter(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === letter.toLowerCase()) {
            count++
        }
    }

    return count;
}

// -----------------------------------------------------------------------------

function convertCurrency(string) {
    let currency = null;
    if (string.includes('UAH') || string.includes('uah')) {
        currency = 'UAH'
    } else if (string.includes('$')) {
        currency = '$'
    }

    let moneyAmount = Number.parseInt(string);

    if (currency === 'UAH') {
        return `${(moneyAmount / 36.95).toFixed(2)}$`;
    } else if (currency === '$') {
        return `${(moneyAmount * 36.95).toFixed(2)}UAH`;
    } else return `Sorry. I accept only UAH and $`
}

// -----------------------------------------------------------------------------

function getRandomPassword(length = 8) {
    let password = '';

    for (let i = 0; i < length; i++) {
        password += Math.floor(Math.random() * 10);
    }

    return Number(password);
}

// -----------------------------------------------------------------------------

function deleteLeters(letter, string) {
    let str = string.toLowerCase();
    let letterToDelete = letter.toLowerCase();
    return str.replaceAll(letterToDelete, '');
}


// -----------------------------------------------------------------------------

function isPalyndrom(string) {
    return string === string.split('').reverse().join('');
}

// -----------------------------------------------------------------------------

function deleteDuplicateLetter(string) {
    let str = string.toLowerCase();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            result += str[i];
        }
    }

    return result;
}

// -----------------------------------------------------------------------------

let task1 = 6518899124;
document.writeln(`What is max digit in this number: ${task1}? --> `, getMaxDigit(task1));
document.writeln('<br>');

let task2 = 5;
let task2a = 7;
document.writeln(`Exponentiate these two numbers: ${task2} ^ ${task2a} -->`, pow(task2, task2a));
document.writeln('<br>');

let task3 = 'fEdeRikO';
document.writeln(`Format this name: ${task3} --> `, formatName('fEdeRikO'));
document.writeln('<br>');

let task4 = 1000;
document.writeln(`How much do I get from ${task4} after tax? `, residualCash(1000));
document.writeln('<br>');

let task5 = 15;
let task5a = 5;
document.writeln(`Give me some random between these: ${task5} -- ${task5a} --> `, getRandomNumber(task5, task5a));
document.writeln('<br>');

let task6 = 'Incomprehensibilities';
let task6a = 'i';
document.writeln(`How much "${task6a}" letters in the word "${task6}"? --> `, countLetter(task6, task6a));
document.writeln('<br>');

let task7 = '125$';
document.writeln(`Convert ${task7} to UAH: `, convertCurrency(task7));
document.writeln('<br>');

let task8 = '125uah';
document.writeln(`Convert ${task8} to $: `, convertCurrency(task8));
document.writeln('<br>');

let task9 = 5;
document.writeln(`Generate ${task9} digits password: `, getRandomPassword(5));
document.writeln('<br>');
document.writeln('Generate default digits password: ', getRandomPassword());
document.writeln('<br>');

let task10 = 'T';
let task10a = 'The quick brown fox jumps over the lazy dog';
document.writeln(`Delete all "${task10}" letters from this string "${task10a}": `, deleteLeters(task10, task10a));
document.writeln('<br>');

let task11 = 'rotator';
document.writeln(`Is this a palyndrom word? "${task11}" --> `, isPalyndrom('rotator'));
document.writeln('<br>');
let task11a = 'script';
document.writeln(`What about this? "${task11a}" --> `, isPalyndrom(task11a));
document.writeln('<br>');

let task12 = 'JavaScript is actively evolving';
document.writeln(`OK. Last one for you. Leave only unique letters in this string: "${task12}" --> `, deleteDuplicateLetter(task12));
document.writeln('<br>');
