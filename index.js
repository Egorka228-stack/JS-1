//  let test; //создали переменую
//  test = 'Hallo World'; //записать в нее даные
//  console.log(test);//вывести даные в консоль
//  test = 'text';//перезаписать даные
// console.log(test);//вывести их в консоль еще раз

//делает тоже самое но запись по другому
// let test = true;

//объявление переменых:
// верблюд
// let testVaribleWithSomethingYes = true; 



// let num1, num2, num=1;
// console.log(+number);
// console.log(-number);
// console.log(!!number);




// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1**(num2))
// console.log(num1 % num2);
// console.log(num += 5);
// console.log(num -= 3);
// console.log(num *= 3);
// console.log(num /= 2);

// promt - функция, всегда возвращает строку
// const UserName = prompt('Enter you name');
// alert('Hallo ' + UserName + ' (-_-)');

// Работа с if

// const ifFunk = function(){
// const input1 = prompt('Enter you name');
// const input2 = prompt('Вы уже уходите?');
// if(input2 === 'Da' ){
// alert('Пока ' + input1);
// }else{
//     alert(input1 + ' пройдемте с нами');
// }

// };
// ifFunk();
//функция
// const firstFunk = function(){
//     console.log('I`m work');
// }
// firstFunk(); - запуск функции






//1
// const Prakt1 = function(){
//     let num1 = prompt('Введите число');
//     num1 = num1 % 2;
//     if(num1 === 0){
//     return ('Число четное');
//     }else{
//         return ('Число не четное');
//     }
// }
// const wuwod = Prakt1();
// alert(wuwod);
// Prakt1();






// //2
// const Prakt2 = function(){
//     const num1 = prompt('Введите 1 число');
//     const num2 = prompt('Введите 2 число');
//     if(num1 >= num2){
//         return num2;
//         }else{
//             return num1;
//     }
// }
// const wuwod = Prakt2();
// alert(wuwod);
// Prakt2();



// //3
// const Prakt3 = function(money,stoimost){
//         if(money > stoimost){
//         alert('Отличная покупка)');
//         }else
//         alert('К сожелению вам не хватает денег(');
// }

// alert('Стоимость трави 50');
// const money = +prompt('Введите сколько у вас денег');
// Prakt3(money,50);



//4
// const Prakt4 = function(num){
// let a = Math.abs(num);
// }
// const num = prompt('Введите числи, что бы узнать его абсолютное значение');
// const wuwod = Prakt4();
// alert(wuwod);
// Prakt4(num);
//в ручную, что бы любое число приводилось к положительному





// 28.01.2022

//1
// const Swetofor = function(){
// const cwet = prompt('Введите свет светофора');
// if(cwet === 'Красный'){
//         return 'Стой на месте, жди зеленый!';
//     }else if(cwet === 'Желтый'){
//     return 'Приготовся, скоро будет зеленый';
//     }else if(cwet === 'Зеленый'){
//         return 'Можешь идти';
//     }else{
//         return 'Введи правильный цвет светофора, а не синий))';
//     }
// }
// const wuwod = Swetofor();
// alert(wuwod);
// Swetofor(num);


//2
// const Calc = function(num1,num2, Znak){
//     switch(Znak){
//         case '+':{
//             return ( num1 + num2);
//             break;
//         }
//         case '-':{
//             return ( num1 - num2);
//             break;
//         }
//         case '/':{
//             return ( num1 / num2);
//             break; 
//         }
//         case '*':{
//             return( num1 * num2);
//             break;
//         }
//         default:{
//             return 'Не верная операция';
//         }
// }
// }
// const num1 = +prompt('Введите 1 число');
// const num2 = +prompt('Введите 2 число');
// const Znak = prompt('Введите одну из перечислиных математичиский операций: /, *, +, -.');
// const wuwod = Calc(num1,num2, Znak);
// alert(wuwod);
// Calc(num1,num2, Znak);



//3
// const Sezon = function(num){
// switch(num){
//     case '1':
//         case '2':
//             case '12':{
//                 return 'Сейчас зима'
//                 break;
//             }
//             case '3':
//                 case '4':
//                     case '5':{
//                         return 'Сейчас весна'
//                         break;
//                     }
//                     case '6':
//                         case '7':
//                             case '8':{
//                                 return 'Сечайс лето'
//                                 break;
//                             }
//                             case '9':
//                                 case '10':
//                                     case '11':{
//                                         return 'Сечайс осень'
//                                         break;
//                                     }
                                    

// }
// }
// const num = prompt('Введите номер месяца');
// const wuwod = Sezon(num);
// alert(wuwod);
// Sezon(num);