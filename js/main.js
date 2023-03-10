// Задание 7
// Создайте переменную favDrink, присвойте ей значение в виде строки.
// • Если favDrink равно beer или vodka, нужно вывести в консоль:
// Чрезмерное употребление алкоголя вредит вашему здоровью
// • Если favDrink равно coffee, нужно вывести в консоль:
// Кофеин вреден для сердца
// • Если favDrink равно milk, нужно вывести в консоль:
// Поздравляю! Молоко очень полезное
// • Если favDrink что-то другое, нужно вывести в консоль:
// К сожалению такого напитка нет в списке
// Указания: Задание необходимо выполнить с помощью конструкции switch. Вывести всё в консоль.

// let favDrink = 'beer';

// switch (favDrink) {
// case 'beer':
//     console.log('Чрезмерное употребление алкоголя вредит вашему здоровью');
//     break;
// case 'vodka':
//     console.log('Чрезмерное употребление алкоголя вредит вашему здоровью');
//     break;
// case 'coffee':
//     console.log('Кофеин вреден для сердца');
//     break;
// case 'milk':
//     console.log('Поздравляю! Молоко очень полезное');
//     break;
// default:
//     console.log('К сожалению такого напитка нет в списке');
// }

//?=====================

// Задание 8
// Создайте переменную stroka, присвойте ей строку или число, например:
// "987456"
// или:
// 987456
// Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так, выведите в консоль:
// да
// в противном случае выведите:
// нет
// Пример: допустим в переменной stroka хранится строка "123456". Ваш код должен сложить первые три числа 1 + 2 + 3, затем последние три 4 + 5 + 6
// затем, сравнить сумму, 6 === 15
// Так как сумма чисел не равна, данное выражение возвращает false.
// Получаем вывод в консоль:
// нет

// let stroka = "234334";

// if (+stroka[0] + +stroka[1] + +stroka[2] === +(+stroka[3]) + +stroka[4] + +stroka[5]) {
//   console.log("да");
// } else {
//   console.log("нет");
// }

// name[0]
// name[0] === 'A' ? console.log('Да') : console.log('Нет')

//======================================================================

// Задание 9
// создайте переменную num1 и num2, присвойте переменным числа.
// Если num1 равно или меньше 1, а num2 больше или равно 3, то выведите в консоль:
// Верно
// иначе выведите в консоль:
// Неверно
// let num1 = 1;
// let num2 = 3;
// if (num1 <= 1 && num2 >= 3) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

//==================================================================

// Задание 10
// Создайте переменные firstNum и secondNum, присвойте переменным числа.
// если сумма больше 10 и в то же время меньше 20 то, умножьте сумму на 5.
// если же сумма больше 20 и меньше 50, то разделите сумму на 3.
// в любых других случаях прибавьте к сумме 10.
// Вывести результат в консоль.
// Пример, если в firstNum хранится значение 10, а в secondNum значение 5 то ваш код должен в начале найти сумму - 15, так как 10 + 5 = 15
// Здесь, сумма больше десяти и меньше двадцати, ее нужно умножить на пять: 15 * 5, получаем результат:
// 75

// let firstNum = 11;
// let secondNum = 2;
// let num = firstNum + secondNum;
// if(num > 10 && num < 20) {
//     console.log(num * 5)
// } else if (num > 20 && num < 50) {
//     console.log(num / 3)
// } else {
//     console.log(num + 10)
// }

//=======================================================================

//Задание 11
//Создайте переменные userName и password.
//Проверьте хранится ли в переменной userName значение "ivan", а в переменной password значение 333.
//Если значения верные, вывести в консоль:
//Добро пожаловать
//в противном случае:
//Пользователь не найден

//let userName = 'ivan';
//let password = 333;
//if (userName === 'ivan' && password === 333) {
//   console.log('Добро пожаловать');
//} else {
//   console.log('Пользователь не найден');
//}

// Задание 12
// Создайте переменные firstNum, secondNum, thirdNum и присвойте им числовые значения.

// Выведите в консоль число с наибольшим значением.

// Например: если в firstNum будет хранится число 5, в secondNum 3, а в thirdNum 16, то вывод в консоль должен быть:

// Максимальное число 16
// Учтите возможность равенства всех трех чисел.

// let firstNum = 5;
// let secondNum = 3;
// let thirdNum = 16;
// if (firstNum > secondNum && firstNum > thirdNum) {
//     console.log(`Максимальное число ${firstNum}`)
// } else if (secondNum > firstNum && secondNum > thirdNum) {
//         console.log(`Максимальное число ${secondNum}`)
// } else if (thirdNum > firstNum && thirdNum > secondNum) {
//         console.log(`Максимальное число ${thirdNum}`)
// }

// Задание 13
// Создайте переменные firstNum, secondNum, age и присвойте им числовые значения.

// Если сумма firstNum и secondNum больше числа хранящегося в переменной age, то выведите в консоль:

// Сумма чисел ${sum} больше моего возраста ${age}
// К примеру: если в firstNum хранится 25, в secondNum - 10, а в age число 22, то получаем вывод в консоли:

// Сумма чисел 35 больше моего возраста 22
// Если же в firstNum хранится 25, в secondNum - 10, а в age число 37, то получаем вывод в консоли:

// Сумма чисел 35 меньше моего возраста 37

// let firstNum = 5;
// let secondNum = 3;
// let age = 16;
// let summ = firstNum + secondNum
// if (summ > age) {
//     console.log(`Сумма чисел ${summ} больше моего возраста ${age}`)
// } else {
//     console.log(`Сумма чисел ${summ} меньше моего возраста ${age}`)
// }

// Задание 14
// Создайте переменную num и присвойте ей числовое значение если число положительное или равно 0, выведите в консоль сообщение "Положительное" если число отрицательное, выведите в консоль сообщение "Отрицательное"

// let num = 2;
// if(num >= 0) {
//     console.log("Положительное")
// } else {
//     console.log("Отрицательное")
// }

// Задание 15
// Создайте переменную num и присвойте ей числовое значение проверте на четность значение переменной и выведите в консоль сообщение "четное" или "нечетное"

// let num = 1;
// if (num % 2 == 0) {
//     console.log("четное")
// } else {
//     console.log("нечетное")
// }

// Задание 16
// Создайте переменную variable проверьте на тип данных если значение равняется объекту то выведите консоль
// "объект является ссылочным типом данных"
// иначе выведите консоль
// "тип {тип переменной} является примитивным типом данных"

// let variable = 'Hello'

// if(typeof variable == 'object') {
//   console.log('объект является ссылочным типом данных')
// } else {
//   console.log(`тип ${typeof variable} является примитивным типом данных`)
// }

// Задание 17
// Создайте переменную num и присвойте ей числовое значение. если число равно 1 выведите в консоль сообщение 'осень', если равно 2 выведите "зима", если равно 3 выведите "весна", если равно 4 выведите "лето".
// Используйте switch case.

// let num = 4;
// switch (num) {
//   case 1:
//     console.log("осень");
//     break;
//   case 2:
//     console.log("зима");
//     break;
//   case 3:
//     console.log("весна");
//     break;
//   case 4:
//     console.log("лето");
//     break;
//   default:
//     console.log("такова сезона нет")
// }

// Задание 18
// Создайте обьект user с ключами name и age если возраст меньше 17,
// то выведите в консоль сообщение
// "Привет, меня зовут {имя} и я не совершеннолетний"
// если нет то выведите в консоль
// "Привет, меня зовут {имя} и это мой первый код"

//let user = {
//   name: 'Dima',
//   age: 17
//};
//if (user.age <= 17) {
//   console.log(`Привет, меня зовут ${user.name} и я не совершеннолетний`)
//} else {
//   console.log(`Привет, меня зовут ${user.name} и это мой первый код`)
//};

// let user = {
//     name: 'Dilmurat',
//     age: 18
//   }
//   if (user.age < 17) {
//     console.log(`Привет, меня зовут ${user.name} и это мой первый код`)
//   } else {
//     console.log(`Привет, меня зовут ${user.name} и я не совершеннолетний`)
//   };

// Задание 19
// Создайте переменную name и age. проверайте что переменная name содержит строковое значение и age - числовое значение
// если все верно - выведите сообщение
// "Все введено верно"
// если какой-то тип данных не совпадает - выведите
// "Данные введены не верно"

// let name = 'Hello';
// let age = 3;

// if (typeof name == "string" && typeof age == "number") {
//     console.log("Все введено верно")
// } else {
//     console.log("Данные введены не верно")
// }

// Задание 20
// Создайте переменную string со строкой
// если регистр маленький переведите строку в верхний регистр
// а если большой переведите в нижний
// Используйте switch case

// Не перезаписывавйте переменную string

// let string = 'hello';
// let low = string.toLowerCase();

// switch (true) {
//     case string == low:
//         console.log(string.toUpperCase());
//         break;
//     default:
//         console.log(string.toLowerCase());
// }

// Задание 21
// Создайте переменную lang и присвойте ей значение en или ru или de или kg используя тернарный оператор выведите сообщение в зависимости от значения lang
// lang = 'en' выведет 'This is english'
// lang = 'ru' выведет 'Это русский'
// lang = 'de' выведет 'Das ist Deutsch'
// lang = 'kg' выведет 'Бул кыргыз тили'

// let lang = 'de';
// let langUser = lang === 'en' ? 'This is english' : lang == 'ru'? 'Это русский' : lang == 'de' ? 'Das ist Deutsch' : lang == 'kg' ? 'Бул кыргыз тили' : 'ok'
// console.log(langUser);

// Задание 22
// Создайте обьект user со значением { name: "Hello", age: 19, status: "student", class: "JS-54", school: "Makers" }
// Если возраст больше или равен 20 и статус равен student и школа равна Makers, то выведите в консоль сообщение
// "Привет, меня зовут {name} и я студент в {school} классе {class}"
// если нет то выведите в консоль
// "Привет, меня зовут {name} и мне {age} лет"

// let user = {
//     name: 'Hello',
//     age: 22 ,
//     status: 'student',
//     class: 'JS-54',
//     school: 'Makers'
// }

// if (user.age >= 20 && user.status === 'student' && user.school === 'Makers') {
//     console.log(`Привет, меня зовут ${user.name} и я студент в ${user.school} классе ${user.class}`)
// } else {
//     console.log(`Привет, меня зовут ${user.name} и мне ${user.age} лет`);
// };

// Задание 23
// В переменной minute лежит число от 1 до 60. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
// Так же если число не находится в диапазоне от 1 до 60, то выведите
// "Число не верное"
// Например:
// minute = 10  -> 1
// minute = 25  -> 2
// minute = 30  -> 3


//const minute = 30;

//switch (true) {
//   case minute >= 1 && minute < 15:
//      console.log("1");
//      break;
//   case minute >= 15 && minute < 30:
//      console.log("2");
//      break;
//   case minute >= 30 && minute < 45:
//      console.log("3");
//      break;
//   case minute >= 45 && minute <= 60:
//      console.log("4");
//      break;
//   default:
//      console.log("Число не верное");
//}


//let minute = 15;
//if (minute >= 0 && minute <= 15) {
//  console.log(`Время ${minute} поподает в первую четверть`);
//} else if (minute > 15 && minute < 30) {
//  console.log(`Время ${minute} поподает в вторую четверти`);
//} else if (minute >= 30 && minute < 45) {
//  console.log(`Время ${minute} поподает в третьей четверти`);
//} else if (minute <= 60 && minute >= 45) {
//  console.log(`Время ${minute} поподает в четвертой четверти`);
//} else {
//   console.log('Число не верное')
//}

//let minute = 3;
//if (minute == 1) {
//   console.log('minute = 15 -> 1');
//} else if (minute == 2) {
//   console.log('minute = 30 -> 2');
//} else if (minute == 3) {
//   console.log('minute = 45 -> 3');
//} else if (minute == 4) {
//   console.log('minute = 60 -> 4');
//}else {
//   console.log('Число не верное')
//}

//let minute = 3;
//if (minute == 1) {
//   console.log('minute =', parseInt(15), '->', parseInt(1));
//} else if (minute == 2) {
//   console.log('minute =', parseInt(30), '->', parseInt(2));
//} else if (minute == 3) {
//   console.log('minute =', parseInt(45), '->', parseInt(3));
//} else if (minute == 4) {
//   console.log('minute = 60 -> 4');
//} else {
//   console.log('minute =', parseInt(60), '->', parseInt(4));
//}


//Задание 24
//Создайте переменную num с числом, состоящим из 6 - ти цифр.Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.Если это так - выведите true, в противном случае выведите false.


//let num = 444444;

//let arr = ('' + num).split('');
//if ((arr[0] + arr[1] + arr[2]) === (arr[3] + arr[4] + arr[5])) {
//   console.log(true);
//} else {
//   console.log(false);
//}



//Задание 25
//В переменной month лежит какое - то число в диапазоне от 1 до 12. Определите в какую пору года попадает этот месяц(зима, лето, весна, осень).
//Так же если число не находится в диапазоне от 1 до 12, то выведите
//"Число не верное"


//let month = 6;

//if (month === 1) {
//   console.log('зима');
//} else if (month === 2) {
//   console.log('зима');
//} else if (month === 3) {
//   console.log('весна');
//} else if (month === 4) {
//   console.log('весна');
//} else if (month === 5) {
//   console.log('весна');
//} else if (month === 6) {
//   console.log('лето');
//} else if (month === 7) {
//   console.log('лето');
//} else if (month === 8) {
//   console.log('лето');
//} else if (month === 9) {
//   console.log('осень');
//} else if (month === 10) {
//   console.log('осень');
//} else if (month === 11) {
//   console.log('осень');
//} else if (month === 12) {
//   console.log('зима');
//} else {
//   console.log("Число не верное");
//};





//Задание 26
//Создайте два обьекта obj1 и obj2
//Если объекты равны, то выведите
//"Объекты равны"
//Если нет, то выведите
//"Объекты не равны, т.к объект - ссылочный тип данных"
//Если title первого объекта равен title второго, то выведите
//"названия одинаковые"
//если нет, то выведите

//"названия не одинаковые"
//let obj1 = { title: "Hello world" }
//let obj2 = { title: "Hello world" }


//let obj1 = { title: "Hello world" };
//let obj2 = { title: "Hello world" };

//if (obj1 == obj2) {
//   console.log("Объекты равны");
//} else {
//   console.log("Объекты не равны, т.к объект - ссылочный тип данных");
//}
//if (obj1.title == obj2.title) {
//   console.log("названия одинаковые");
//} else {
//   console.log("названия не одинаковые");
//}

//?======================================================================

//Экстра таск 1
//Создайте переменную data, в которой хранится один из 8 типов данных.

//Напишите код, который выводит в консоль строку:

//It's number 
//если в переменной data хранится число, или:

//It's boolean 
//если в переменной булевый тип данных.

//Если же в data лежит какое - то другое значение, то выводите:

//It's not number and boolean 

//let data = '0';
//if (typeof data == "number") {
//   console.log("It's number")
//} else if (typeof data == "boolean") {
//   console.log("It's boolean")
//} else {
//   console.log("It's not number and boolean")
//}



//Экстра таск 2
//Создайте объект obj, с ключами firstNum и secondNum.

//Напишите код который проверяет firstNum и secondNum:

//в случае если firstNum и secondNum не равны нулю, перемножьте числа и выведите в консоль результат
//если же одно из чисел равно нулю, то выведите в консоль их сумму
//если же оба значения равные нулю, выведите в консоль булево: false
//если же значением secondNum является булево false, вывести сумму


//   let obj = {
//    firstNum: 2,
//    secondNum: 0
// }

// if (obj.firstNum != 0 && obj.secondNum != 0) {
//    console.log(obj.firstNum * obj.secondNum)
// } else if (obj.firstNum == 0 || obj.secondNum == 0) {
//     console.log(obj.firstNum + obj.secondNum)
// } else if (obj.firstNum == 0 && obj.secondNum == 0) {
//    console.log(false)
// } else if (obj.secondNum == false) {
//    console.log(obj.firstNum + obj.secondNum)
// }



