// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr запишем строку из дней недели на русском языке, а если имеет значение 'en' – то на английском. 
// Решите задачу через 2 if, через switch-case.

// "пн, вт, ср, чт, пт, сб, вс"
// "mn, ts, wd, th, fr, st, sn"

// const lang = 'en';
// let arr ='';
// const daysRu = "пн, вт, ср, чт, пт, сб, вс";
// const daysEn = "mn, ts, wd, th, fr, st, sn";
// if(lang ==='ru') {
// arr=daysRu;
// } else if(lang==='en') {
//     arr=daysEn;
// }               
// console.log(arr);


// const lang = 'bg';
// let arr ='';
// const daysRu = "пн, вт, ср, чт, пт, сб, вс";
// const daysEn = "mn, ts, wd, th, fr, st, sn";

// switch(lang) {
//     case 'ru':
//         arr=daysRu;
//         break;
//     case 'en':
//         arr=daysEn;
//         break;
//     default:
//        arr='Такого языка мы незнаем';
// }
// console.log(arr);           



// 2. Пользователь вводит диапазон нужно вывести на экран все простые числа из этого диапазона. 
// Простыми числами называются числа, которые имеют всего 2 делителя, то есть
// делятся только на 1 и на самого себя!

// 3.
// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, 
//  и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.



// 4. Дано произвольное целое число n. Написать программу, которая
// разбивает число n на цифры и выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили следующим образом 1+2+3)
// обратный порядок = 321
// */

// const n = 123;

// let toyal = 0;
// const nStr = n.toString();
// let totalResult ="";
// console.log(nStr);

// for (let)

// 7. Требуется написать код, который выводит в консоль числа от 1 до n, где n — это целое число, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const start = 25;

// for (let i = 1; i <= start; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }


// 8. Нужно написать скрипт, который проверяет, являются ли две строки анаграммами,
//  причем регистр букв не имеет значения. 
// Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Пиши код ниже этой строки
//     let totalPrice = pricePerDroid * orderedQuantity;
//     let balance = customerCredits - pricePerDroid*orderedQuantity;
    
//   if (customerCredits >= totalPrice) {
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${balance} кредитов`;
//   } else {
//     message = 'Недостаточно средств на счету!';
//   }
  
//     // Пиши код выше этой строки
//     return message;
//     console.log(message);
//   }


// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newArray = [];
//   numbers.forEach(number =>{
//    if (element % 2 === 0) {
//       newArray.push(number+=value);
//       }
//     newArray.push(number);
//   });
//     // Пиши код выше этой строки
//     return newArray;
//   }
//   console.log(newArray);

//   changeEven([1, 2, 3, 4, 5], 10);
//   changeEven([2, 8, 3, 7, 4, 6], 10);
//   changeEven([17, 24, 68, 31, 42], 100);
//   changeEven([44, 13, 81, 92, 36, 54], 100);

  
 
  