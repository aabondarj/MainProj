'use strict'

alert("Hello");
confirm("Anime");
prompt("Insta", "samka");

let money = +prompt("Ваш бюджет на месяц?", "60000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2022-04-14");

let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


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

};


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

let i = 0;

/*
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


appData.moneyPerDay = appData.budget / 30

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}