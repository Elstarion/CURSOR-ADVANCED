const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// -----------------------------------------------------------------------------

function getSubjects({ subjects }) {
    return Object.keys(subjects).map((subject) => {
        return `${subject[0].toUpperCase()}${subject.slice(1).replace('_', '')}`
    });
}

console.log(`${students[0].name} is learning`, getSubjects(students[0]));
console.log(`${students[1].name} is learning`, getSubjects(students[1]));
console.log(`${students[2].name} is learning`, getSubjects(students[2]));

// -----------------------------------------------------------------------------

function getAverageMark({ subjects }) {
    const allMarks = Object.values(subjects).reduce((subject, currentSubject) => {
        return subject.concat(currentSubject);
    });

    const averageMark = allMarks.reduce((acc, value) => {
        return acc + value;
    }) / allMarks.length;

    return Number(averageMark.toFixed(2));
}

console.log(`${students[0].name}'s average mark is`, getAverageMark(students[0]));
console.log(`${students[1].name}'s average mark is`, getAverageMark(students[1]));
console.log(`${students[2].name}'s average mark is`, getAverageMark(students[2]));

// -----------------------------------------------------------------------------

function getStudentInfo({ name, course }) {
    const index = students.findIndex((object) => {
       return object.name === name;
    });

    return {course, name, averageMark: getAverageMark(students[index])};
}

console.log('Student info', getStudentInfo(students[0]));
console.log('Student info', getStudentInfo(students[1]));
console.log('Student info', getStudentInfo(students[2]));

// -----------------------------------------------------------------------------

function getStudentsNames(students) {
    return students.map((student) => {
        return student.name;
    }).sort();
}

console.log('Students names -->', getStudentsNames(students));

// -----------------------------------------------------------------------------

function getBestStudent(students) {
    const allStudents = students.map((student) => {
        return getStudentInfo(student);
    });  

    const bestStudent = allStudents.reduce((best, candidate) => {     
        return best.averageMark > candidate.averageMark ? best : candidate;
    });

    return bestStudent.name;
}

console.log('The best student is:', getBestStudent(students));

// -----------------------------------------------------------------------------

function calculateWordLetters(word) {
    return word.split('').reduce((object, letter) => {
        letter in object ? object[letter]++ : object[letter] = 1;
        return object
    }, {});
}

console.log('Calculate letters', calculateWordLetters('reduce'));