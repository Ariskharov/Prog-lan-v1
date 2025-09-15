// Массивы (индексация, длинна, добавление)
// Цикл for / for of, for со счетчиком
// оператор  ++
// управляющие операторы циклов breake continue
// разница между == ===
// принцип DRY

// принцип DRY
// корявый код
function square1(a) {
    return a * a;
}
function square2(b) {
    return b * b;
}

// True
function square(a,b) {
    return a * b;
}



// разница между == - сравнение значений .    === -сравнение значений + тип данных
console.log('hello'== "hello"); 
console.log('1'== 1);
console.log(1 === '1');
console.log(1 === 1);




// управляющие операторы циклов breake continue

for (var i = 1; i<=10; i++){
    if(i===3) continue; // на 3м шаге продолжаем цикл но пропустили для отобр
    if(i===10) break; // на 10м шаге останавливаем цикл
    console.log(i);
    
}





//оператор ++
// var num = 5;
// console.log(num++);
// console.log(num);

// var num2 = 2;
// console.log(++num2);





//for of, for со счетчиком
var numbers = [10, 20, 30];
//for of
for(var i of numbers){
    console.log('Элементы: ', i);
}
//for со счетчиком
for (var i=0; i<numbers.length; i++){
    console.log('Индекс ' + i + ' значение ' + numbers[i]);
}

// Массивы
var fruits = ['apple', 'banana', 'cherry'];
//индексация
console.log(fruits[0]);
console.log(fruits[2]);
//длинна
console.log(fruits.length + ' Это кол-во элементов в массиве');
//добавление в конец
fruits.push('orange');

//добавление в начало
fruits.unshift('mango');

//изменить
fruits[2] = 'strawberry';

console.log(fruits);


