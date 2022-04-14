'use strict'

alert("Hello");
confirm("Anime");
prompt("Insta", "samka");

let money = prompt("Ваш бюджет на месяц?", "60000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2022-04-14");

let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", "Кредит"),
    q2 = prompt("Во сколько обойдется?", "10000"),
    q3 = prompt("Введите обязательную статью расходов в этом месяце", "Квартира"),
    q4 = prompt("Во сколько обойдется?", "15000");

    appData.expenses.q1 = q2;
    appData.expenses.q3 = q4;

let evryDayBudget = (appData.budget / 30);
alert(evryDayBudget);

console.log(appData);
console.log(evryDayBudget);