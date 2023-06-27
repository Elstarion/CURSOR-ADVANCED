function getRandomArray(length, min, max) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return result;
}

console.log('Random array -->', getRandomArray(10, 2, 53));

// -----------------------------------------------------------------------------

function getModa(...numbers) {
    let compare = null;
    let mostFreq = null;

    numbers.reduce((acc, curr) => {
        if (!Number.isInteger(curr)) {
            acc[curr] = null;
        } else if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }

        if (acc[curr] > compare) {
            compare = acc[curr];
            mostFreq = curr;
        }

        return acc;

    }, {})

    return `Most frequent value is: ${mostFreq}`;
}

const moda = getModa(78.5, 2, 55, 11, 78.5, 2, 55, 77, 57, 55, 55, 81, 78.5, 23);
console.log(moda);

// -----------------------------------------------------------------------------

function getAgerage(...numbers) {
    let sum = 0;
    let divideby = 0;

    numbers.reduce((acc, curr) => {
        if (!Number.isInteger(curr)) {
            acc += 0;
            divideby += 0;
        } else {
            acc += curr;
            divideby++;
        }

        sum = acc;
        return acc;

    }, 0)    

    return `Average value is: ${sum / divideby}`;
}

const agerage = getAgerage(6, 2, 12.5, 1.1, 41.8, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(agerage);

// -----------------------------------------------------------------------------

function getMedian(...numbers) {
    let middleIndex = Math.floor(numbers.length / 2);

    numbers.sort((a, b) => a - b);

    let median = null;

    if (numbers.length % 2 != 0) {
        median = numbers[middleIndex];
    } else {
        median = (numbers[middleIndex] + numbers[middleIndex - 1]) / 2;
    }

    return `Median number is: ${median}`;
}

const oddArrayMedian = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('Odd length array -->', oddArrayMedian);

const evenArrayMedian = getMedian(11, 74, 32, 94);
console.log('Even length array -->', evenArrayMedian);

// -----------------------------------------------------------------------------

function filterEvenNumbers(...numbers) {
    return numbers.filter((value) => {
        return value % 2 != 0;
    });
}

const filteredArray = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filteredArray);

// -----------------------------------------------------------------------------

function countPositiveNumbers(...numbers) {
    return numbers.reduce((acc, curr) => {
        curr > 0 ? acc++ : acc += 0;
        return acc;
    }, 0);
}

const positiveNumbersAmount = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(`There is ${positiveNumbersAmount} positive number(s).`);

// -----------------------------------------------------------------------------

function getDividedByFive(...numbers) {
    return numbers.filter((value) => {
        return value % 5 === 0;
    });
}

const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(`Array of values divided by 5 without remainder -->`, dividedByFive);

// -----------------------------------------------------------------------------

function replaceBadWords(string) {
    const badWords = ['fuck', 'shit', 'moron'];
    //Expression that will check if current value in map holds any of the  
    // elements from [badWords]
    const badExpression = new RegExp(badWords.join("|"), "gi");
    const replacement = '****************';

    return string.split(' ').map((value) => {
        return value.replace(badExpression, (matchedWord) => {
            return replacement.substring(0, matchedWord.length);
        })
    }).join(' ');
}

const profanityFilter1 = replaceBadWords("Are you fucking kidding?");
console.log(profanityFilter1);
const profanityFilter2 = replaceBadWords('Holy shit!');
console.log(profanityFilter2);
const profanityFilter3 = replaceBadWords(`He's a fucking moron!`);
console.log(profanityFilter3);

// -----------------------------------------------------------------------------

function divideByThree(word) {
    const wordToLowerCase = word.trim().toLowerCase();
    const result = [];   

    if (word.length < 3) {
        result.push(wordToLowerCase);
    } else {
        for (let i = 0; i < word.length; i += 3) {
                result.push(wordToLowerCase.slice(i, i + 3));
            }
    }

    return result;
}

const dividedWord = divideByThree('Commander');
console.log(dividedWord);
const dividedWord1 = divideByThree('live');
console.log(dividedWord1);

// -----------------------------------------------------------------------------

function generateCombinations(word) {

    if (word.length < 2) {
        return word;
    }

    const result = [];

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const remainingLetters = word.slice(0, i) + word.slice(i + 1, word.length);
        
        for (let subCombination of generateCombinations(remainingLetters)) {
            result.push(letter + subCombination);
        }
    }

    return result;
}

const combinations = generateCombinations('man');
console.log(combinations);