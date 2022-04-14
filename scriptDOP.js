'use strict'

 let a = 5;
console.log(a);

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {}

console.log(4/0);
console.log('string'*9);

let som;
console.log(som);

let persone = {
    name: "John",
    age: 25,
    isMaarried: false
};

console.log(persone.name);
// console.log(persone["name"]); ВТОРОЙ ВАРИАНТ (используется реже)

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

// alert("Hello World!");
// let answer = confirm("Are you here?");

// console.log(answer);


// ЕСЛИ ПОСТАВИТЬ "+" ПЕРЕД ЗНАЧЕНИЕМ ТО ТИП ПЕРЕВЕДЕТСЯ В "number"

let answer = +prompt("Есть ли вам 18?", "Да");

// ИНКРИМЕНТ И ДИКРИМЕНТ

console.log(typeof(answer));


console.log("arr" + " - object");
// console.log(4 + " - object");
console.log(4 + +" - object");


// ИНКРИМЕНТ И ДИКРИМЕНТ

let incr = 10,
    decr = 10;

// incr++;
// decr--;

// Делает ДО выполнения программы
console.log(++incr);
console.log(--decr);

// Делает ПОСЛЕ выполнения программы
console.log(incr++);
console.log(decr--);

// % остаток от деления
console.log(5%2);

/* Знак "="
1 раз - присваивание
2 раза - проверка на равенство
3 раза - строгая проверка по типам данных */

console.log("2" == 2);  /*Проверка на равенство значений*/

console.log("2" === 2); /*Проверка на равенство типов*/

// Операторы ("И" - &&)  и ("ИЛИ" - ||)

// Опеатор "И" если оба выражение верны
let isChecked1 = true,
    isClose1 = false;

console.log(isChecked1 && isClose1);

// Опеатор "ИЛИ" если одно из выражений верное
let isChecked2 = false,
    isClose2 = false;

console.log(isChecked2 || !isClose2); //Оператор ("ОТРИЦАНИЕ" - !)