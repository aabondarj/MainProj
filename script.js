'use strict'

alert("Hello");
confirm("Anime");
prompt("Insta", "samka");

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
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let d = prompt("Статья необезательных расходов ?", "Аквапарк");
        appData.optionalExpenses[i] = d;
}
}
chooseOptExpenses();
/*
let i = 0;

while(i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'Кредит'),
        b = +prompt('Во сколько обойдется?', '10000');

    if( (typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) && (a != '') && (b != '') && (a.length < 50) ) {
        console.log('done');
        appData.expenses[a] = b;
        
    } else {
        i--;
    }
    i++;
}
*/



/*let i = 0;

do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'Кредит'),
        b = +prompt('Во сколько обойдется?', '10000');

    if ( (typeof(a) === 'string') && (typeof(b) === 'number') && (typeof(a) != null) && (typeof(b) != null) && (a != '') && (b != '') && (a.length < 50) ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
}
while(i < 2);

*/

function defectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.")
}
defectDayBudget();


function defectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

defectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
            
        appData.monthIncome = ((save/100)/12)*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

console.log(appData);