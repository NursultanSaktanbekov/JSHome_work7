/* 1) На forEach:

- Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел */

// let numbers = [1, 2, 3, 4, 5];
// let squares = [];

// numbers.forEach(num => {
//     squares.push(num * num);
// });
// console.log(squares);

/* - Дан массив с числами. Найдите сумму этих чисел. */

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach(number => {
//     sum += number;
// });
// console.log(sum);

/*2) На map:
- Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. */

// const nums = [1, 2, 3, 4, 5];
// const squares = nums.map(function (num) {
//     return num * num
// })
// console.log(squares)

/* 3) На reverse:

- Дан массив с днями недели ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']. Сделайте так, что он начинался с воскресенья и заканчивался понедельником */

// let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// daysOfWeek.reverse();
// console.log(daysOfWeek);

/* 4) На split и join:

- C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"

const arr = [3, 2, 1];
const str = arr.join(' больше, чем ');
console.log(str + '');

- Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

    let names = 'Я, Учу, JavaScript';
    let arr = names.split(', ');
    for (let name of arr) {
    console.log(`${name}.`);
    }

- В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'. */

// let date = '2025-12-31';
// let newDate = date.split('-').reverse().join('.');
// console.log(newDate);

/* 5) На filter:

- Дан массив с числами. Оставьте в нем только отрицательные числа. В отдельную переменную положите количество отрицательных чисел в этом массиве. */

// const nums = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// const evenOnly = nums.filter(function (n) {
//     const remainder = n % 2
// return remainder === 0
// })
// console.log(evenOnly)

/* - Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. */

let strings = ["apple", "banana", "orange", "kiwi", "pineapple"];
let longStrings = strings.filter(str => str.length > 5);

console.log("Строки длиной более 5 символов:", longStrings);


