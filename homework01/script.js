const rock = 15.678;
const paper = 123.965;
const scissors = 90.2345;

const maxPrice = Math.max(rock, paper, scissors);
const minPrice = Math.min(rock, paper, scissors);

const priceTotal = rock + paper + scissors;
const integerPriceTotal =  Math.floor(rock) + Math.floor(paper) + Math.floor(scissors);

const roundedInteger =  Math.round(integerPriceTotal / 100) * 100;
const isOdd = Boolean(integerPriceTotal % 2);

const change = 500 - priceTotal;
const averagePrice = (priceTotal / 3).toFixed(2);

const randomDiscount = Math.random().toFixed(2);
const priceWithDiscount = ( priceTotal - priceTotal * randomDiscount ).toFixed(2);

const costPrice = Math.trunc(priceTotal / 2);
const profit = Math.trunc( costPrice - (priceTotal * randomDiscount) );

document.writeln('Max price: ', maxPrice);
document.writeln('<br>');
document.writeln('Min price: ', minPrice);
document.writeln('<br>');
document.writeln('Total price: ', priceTotal);
document.writeln('<br>');
document.writeln('Integer price: ', integerPriceTotal);
document.writeln('<br>');
document.writeln('Rounded to closest hundred: ', roundedInteger);
document.writeln('<br>');
document.writeln('Integer is odd: ', isOdd);
document.writeln('<br>');
document.writeln('Residual money: ', change);
document.writeln('<br>');
document.writeln('Average price: ', averagePrice);
document.writeln('<br>');
document.writeln('Client gets discount of: ', Math.trunc(randomDiscount * 100) + '%');
document.writeln('<br>');
document.writeln('Price with discount: ', priceWithDiscount);
document.writeln('<br>');
document.writeln('Profit: ', profit);
document.writeln('<br>');
document.writeln('<br>');
document.writeln(`Maximum price: ${maxPrice}
Minimum price: ${minPrice}
Total price: ${priceTotal} 
Total integer price: ${integerPriceTotal}
Price rounded to closest hundred: ${roundedInteger}
Is integer price odd?: ${isOdd}
Residual money: ${change}
Average price: ${averagePrice}
Price with discount: ${priceWithDiscount}
Profit: ${profit}`);