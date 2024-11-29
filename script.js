// однострочный коммент

/*
привет
привет многострочный коммент
*/

// типы данных
// 8 шт

// 1. number - число (целое, дробное 11.3 (точка))
// 2. string - строка (что-то в кавычках) 'stroka' "222" `333`
// 3. boolean - true или false правда/ложь
// 4. null - null - ничего 
// 5. undefined - undefined - ничего
// 6. BigInt - 123n (большое число)
// 7. Symbol - символ - уникальный индетификатор
// 8. Object - объект - {ключ: значение} - ключи всегда строки - значение любое

// переменные

// var, let, const - var устаревший

// let num = 5; //присвоение
// let str = '5';
// let bool = true;
// let und;

// num = 15.2; //можно менять таким образом тип данных прим. num = `15.2`;

// const test = '432';
// test = '43233'; // нельзя так делать - постоянная величина ошибка
// let num = 2323; ошибка

// var testVar = 22;
// var testVar = '666';


// let - объявление переменной
// можно перезаписать тип и значение

//const - объявление константы
// перезаписать значение нельзя
// нельзя оставлять пустым (нужно проинициализировать т.е. присвоить значение прим.: const x; - нельзя)

// var - переменная, не использовать
// можнро объявить несколько переменных с одинкаовым именем - это плохо

// \ - экранирование символа (обычный символ)
// `` - бэктик - многострочный текст - template string (шаблонная строка) втавка ${имя переменной которую нужно вставить, прим. `Привет дорошой ${str}`}
// ${имя переменной} - интерполяция - динамическая вставка в текст значений переменных (работает только с бэктиками ``)
// let str = 'boy\'s ball';
// let str2 = "boy's ball";
// let str3 = `boy's ball`;

// let helloMessage = 'Привет, дорогой ${str}';

// const GLOBAL_SETTINGS = 3.14; //большие буквы и подчеркивание - глобальные и важные постоянные значения

// V8 - движок

//{} - литерал объекта
// const obj = {
//     age: 22,
//     name: 'John',
//     gender: 'male',
//     isStudent: true,

// }

// let str = 'aifja'; => литерал строки
// let newString = new String('hflla')

// console.log(obj); //проверка, для пушить - удалить - логировать в консоли в браузера, для отладки
//console.log(str);


// Модальное окно
// prompt, alert, confirm

// prompt('massage', 'defaultAnswer')

// const userName = prompt('введите ваше имя', 'John'); //1 - вопрос, 2- ответ по умолчанию
// console.log(userName);

// alert('message') - уведомление с кнопкой ок
// alert('ok?');

// confirm
// const result = confirm('massage');
//___________________________________________________________________________________________________________________________

// //1
// console.log('Запускаем таймер');
// const timer1 = alert(5);
// const timer2 = alert(4);
// const timer3 = alert(3);
// const timer4 = alert(2);
// const timer5 = alert(1);
// const timer6 = alert(0);
// console.log('Обратный отсчет закончен');

// //2
// const myName = 'Yana';
// const mySurname = 'Bespyataya';
// const myFavoriteDrink = 'Beer';
// const myFavoriteAnimal = 'Cats';
// console.log(myName);
// console.log(mySurname);
// console.log(myFavoriteDrink);
// console.log(myFavoriteAnimal); 