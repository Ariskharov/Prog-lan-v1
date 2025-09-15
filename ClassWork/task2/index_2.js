const userName = "ARIF";
const userAge = 20;
const hasAccess = true;
let notAssigned;
const emptyValue = null;

const student = {
    name: "Arif",
    surname: "Lirov",
    age: 20,
    isEnrolled: true,
    grades: [5, 4, 5, 3, 4],
    passport: {
        series: "4010",
        number: "+999552202525",
        issuedBy: "ккн Токмак",
        issueDate: "2018-06-15"
    }
};

console.log("Имя:", student.name);
console.log("Фамилия:", student.surname);
console.log("Возраст:", student.age);
console.log("Зачислен:", student.isEnrolled);
console.log("Оценки:", student.grades);
console.log("Паспорт - Серия:", student.passport.series);
console.log("Паспорт - Номер:", student.passport.number);
console.log("Паспорт - Кем выдан:", student.passport.issuedBy);
console.log("Паспорт - Дата выдачи:", student.passport.issueDate);

console.log("Типы:");
console.log("userName:", userName, typeof userName);
console.log("userAge:", userAge, typeof userAge);
console.log("hasAccess:", hasAccess, typeof hasAccess);
console.log("notAssigned:", notAssigned, typeof notAssigned);
console.log("emptyValue:", emptyValue, typeof emptyValue);



function getNumber(message) {
    let num;
    do {
        num = Number(prompt(message));
        if (isNaN(num)) {
            alert("Ошибка: нужно вводить только числа!");
        }
    } while (isNaN(num));
    return num;
}

var number1 = getNumber("Введите первое число:");
var number2 = getNumber("Введите второе число:");

if (number1 > number2) {
    console.log("Первое число больше второго");
} else if (number2 > number1) {
    console.log("Второе число больше первого");
} else {
    console.log("Числа равны");
}

