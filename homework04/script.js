const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function getPairs(names) {
    const maleNames = [];
    const femaleNames = [];
    const pairs = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i].endsWith('р') || names[i].endsWith('й')) {
            maleNames.push(names[i]);
        } else femaleNames.push(names[i]);
    }
 
    shuffle(maleNames);
    shuffle(femaleNames);

    while (maleNames.length > 0 && femaleNames.length > 0) {
        pairs.push([`${maleNames.shift()} i ${femaleNames.pop()}`]);
    }

    return pairs;
}

const pairs = getPairs(students);

console.log('Pairs', pairs);
document.writeln(`[${pairs}]`);

// -----------------------------------------------------------------------------

function assignThemes(pairs, themes) {
    const pairsCopy = JSON.parse(JSON.stringify(pairs));
    const shuffledThemes = shuffle(JSON.parse(JSON.stringify(themes))); // ))))))

    pairsCopy.forEach(element => {
        element.push(shuffledThemes.pop())
    });

    return pairsCopy;
}

const assignedThemes = assignThemes(pairs, themes);
console.log('Themes assigned to pairs', assignedThemes);

document.writeln('<br>');
document.writeln('<br>');
document.writeln(`[${assignedThemes}]`);

// -----------------------------------------------------------------------------

function asseStudent(students, marks) {
    const scientists = shuffle(Array.from(students));
    const marksCopy = shuffle(marks.slice());
    const result = [];

    scientists.forEach(element => {
        result.push([`${element}, ${marksCopy.pop()}`]);
    })

    return result
}


const personalAssessment = asseStudent(students, marks);

console.log('Personal assessment: ', personalAssessment);
document.writeln('<br>');
document.writeln('<br>');
document.writeln(`[${personalAssessment}]`);

// -----------------------------------------------------------------------------

function randomAssessment(array) {
    const projectPairs = JSON.parse(JSON.stringify(array));

    projectPairs.forEach(element => {
        element.push(Math.floor(Math.random() * 5 + 1))
    })

    return projectPairs
}

const projectAssessment = randomAssessment(assignedThemes);
console.log('Project assessment', projectAssessment);

document.writeln('<br>');
document.writeln('<br>');
document.writeln(`[${projectAssessment}]`);