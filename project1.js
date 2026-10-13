const name = "Grace";
const monthlyIncome = 350000;
const rent = 120000;
const food = 90000;
const transport = 30000;
const internet = 15000;

// totalExpenses

let totalExpenses = rent + food + transport + internet;

// Savings

let savings = monthlyIncome - totalExpenses;

// Saving Rate

let savinRate = (savings / monthlyIncome) * 100;

// Saving Goal

let savingGoal = savinRate >= 20;

// Answer 1
console.log(`${name} has a montly income of ${monthlyIncome} Rwf and she spends ${totalExpenses} RWF`)

// Answer 2
console.log(`${name} after spending ${totalExpenses} RWF she is left with a saving of ${savings} RWF`)

// Answer 3
console.log(`${name} has a saving rate of ${savingRate.toFixed(2)}%`)

// Answer 4
console.log(`${name} has a saving goal of${totalExpenses}`)