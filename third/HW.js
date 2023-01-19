'use strict'

// alert("Hello");
// confirm("Anime");
// prompt("Insta", "samka");

let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesItem = document.querySelectorAll('.expenses-item'),
    btn = document.getElementsByTagName('button'),
    expensesItemBtn = btn[0],
    optionalExpensesBtn = btn[1],
    countBudgetBtn = btn[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {

        money = +prompt("Ваш бюджет на месяц?", "50000");
        time = prompt("Введите дату в формате YYYY-MM-DD", "2022-04-14");
        /* isNaN - возвращает "true" в том случае когда туда попадают НЕ цифры*/
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "60000");
        }

}
start();



let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {   
    for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "Кредит"),
                b = +prompt("Во сколько обойдется?", "10000");
    
            if ( (typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) 
            && (a != '') && (b != '') && (a.length < 50) ) { // null проверяет на 
                                                            // нажатие кнопки "Отмена"
                                                            // '' - проверяет на пустую строку
                console.log("done");
                appData.expenses[a] = b;  //Мы передаем перемнную, поэтому пишем через квардратные скобки
            } else {
                i--;
            }
    
        }
    },
    defectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.")
    },
    defectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
                
            appData.monthIncome = ((save/100)/12)*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let d = prompt("Статья необезательных расходов ?", "Аквапарк");
            appData.optionalExpenses[i] = d;
        }
    },
    chooseIncome: function() {
        for (let i = 1; i < 2; i++) {
            
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            if ( (typeof(items) === 'string') && (items != '') && (typeof(items) != null) ) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                i--;
            }
        }
        appData.income.forEach(function(item, key) {
            alert("Способы доп.заработка " + (key+1) + ' - ' + item);
                });
    }
};

for (let i in appData) {
    console.log('Наша программа включает в себя данные: ' + i + ' - ' + appData[i]);
}


appData.chooseIncome();