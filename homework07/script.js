const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return this.tax * salary;
};

console.log('Taxes in Ukraine with given salary:', getMyTaxes.call(ukraine, 2000));
console.log('Taxes in Latvia with given salary:', getMyTaxes.call(latvia, 2000));
console.log('Taxes in Litva with given salary:', getMyTaxes.call(litva, 2000));

// -----------------------------------------------------------------------------

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log('Middle taxes in Ukraine:', getMiddleTaxes.call(ukraine));
console.log('Middle taxes in Latvia:', getMiddleTaxes.call(latvia));
console.log('Middle taxes in Litva:', getMiddleTaxes.call(litva));

// -----------------------------------------------------------------------------

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log('Total taxes in Ukraine:', getTotalTaxes.call(ukraine));
console.log('Total taxes in Ukraine:', getTotalTaxes.call(latvia));
console.log('Total taxes in Ukraine:', getTotalTaxes.call(litva));

// -----------------------------------------------------------------------------

function getMySalary(country) {
    const salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    const taxes = Number((salary * this.tax).toFixed(2));
    const profit = salary - taxes;

    if (this.tax === 0.195) {
        country = 'Ukraine';
    } else if (this.tax === 0.25) {
        country = 'Latvia';
    } else if (this.tax === 0.15) {
        country = 'Litva';
    }

    return console.log(country, {
        salary,
        taxes,
        profit
    });
}

setInterval(getMySalary.bind(ukraine), 10000);
setInterval(getMySalary.bind(latvia), 10000);
setInterval(getMySalary.bind(litva), 10000);