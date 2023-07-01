class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.dismissed = false;
    }

    getInfo() {
        return `Студент ${this.course}го курсу, університет - ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this.dismissed ? null: this._marks;
    }

    set marks(newMark) {
        return this.dismissed ? null : this._marks.push(newMark);
    }

    getAverageMark() {
        return Number((this._marks.reduce((acc, value) => {
            return acc + value;
        }) / this._marks.length).toFixed(1));
    }

    dismiss() {
        this.dismissed = true;
    }

    recover() {
        this.dismissed = false;
    }
}

const Ostap = new Student('Вища Школа Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');

console.log(Ostap.getInfo());
console.log('Initial marks', Ostap.marks);
Ostap.marks = 5;
console.log('Updated marks', Ostap.marks);
console.log('Середній бал:', Ostap.getAverageMark());

Ostap.dismiss();
Ostap.marks = 2;
console.log('Dismissed', Ostap.marks);
Ostap.recover();

console.log('Recovered', Ostap.marks);
Ostap.marks = 4;
console.log(Ostap.marks);


class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.getScholarship();
    }

    getScholarship() {
        setInterval(() => {
        this.getAverageMark() > 4 && !this.dismissed ? 
        console.log('Ви отримали 1400 грн. стипендії') : 
        console.log('Ви отримали по пиці від мамки x_x');
    }, 30000)}   
}

const Nazar = new BudgetStudent('Вища Школа Економіки м.Київ', 3, 'Назар Родоманський Бендер');

console.log(Nazar.getInfo());
Nazar.marks = 4;
Nazar.marks = 5;
console.log('Nazar marks', Nazar.marks);

// Nazar.dismiss();
// Nazar.recover();

// Nazar.marks = 2;
// Nazar.marks = 2;
// Nazar.marks = 2;
// Nazar.marks = 2;
// Nazar.marks = 2;