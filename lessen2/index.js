// var arabicNumber = Number(prompt('Enter number [1-9]'));
// switch(arabicNumber) {
//     case 1:
//         console.log(arabicNumber + " = I");
//         break;
//     case 2:
//         console.log(arabicNumber + " = II");
//         break;
//     case 3:
//         console.log(arabicNumber + " = III");
//         break;
//     case 4:
//         console.log(arabicNumber + " = IV");
//         break;
//     case 5:
//         console.log(arabicNumber + " = V");
//         break;
//     case 6:
//         console.log(arabicNumber + " = VI");
//         break;
//     case 7:
//         console.log(arabicNumber + " = VII");
//         break;
//     case 8:
//         console.log(arabicNumber + " = VIII");
//         break;
//     case 9:
//         console.log(arabicNumber + " = IX");
//         break;
//     default:
//         console.error("Enter number [1-9]");
// }

function toRoman(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    return result;
}

while (true) {
    let input = prompt("Введите число от 1 до 3999 или 'exit' для выхода:");
    
    if (input === null) {
        break; 
    }

    if (input.toLowerCase() === "exit") {
        alert("Программа завершена.");
        break;
    }

    let number = parseInt(input);

    if (isNaN(number) || number < 1 || number > 3999) {
        alert("Ошибка! Введите целое число от 1 до 3999.");
    } else {
        alert("Римское число: " + toRoman(number));
    }
}



// var amount = prompt('Enter amount');
// var currency = prompt('Enter currency');

// var convertedAmount = 0;

// // if (currency==="AU" || currency==="au" || currency==="Au" || currency==="aU")


// currency = currency.toUpperCase();

// //if (currency==="AU"){
//     convertedAmount = amount/ 5000;
// //}else if(currency=== 'AG'){
//     //convertedAmount = amount / 2500;
// //}else if(currency === "PL"){
//     //convertedAmount = amount / 7500;
// //}else{
//     //console.warn('We converted only metals');
// //}



// switch(currency){
//     case "AU":
//         convertedAmount = amount/ 5000;
//         break;
//     case "AG":
//         convertedAmount = amount / 2500;
//         break;
//     case "PL":
//         convertedAmount = amount / 7500;
//         break;
// }
// console.log(convertedAmount);

//var money = Number(prompt('Сколько у тебя денег?'));
//if (money >= 100) {
//    console.log('Ты богат');
//} else if(money<100 && money>0){
//    console.log('Ты бедный');
//} else {
//    console.log('Ты нищеброд');
//}




//var num1 = Number(prompt('enter some number'));
//console.log(typeof num1);


const studentInfo = {
    name: "Arif",
    surname: "Lirov",
    group: "IT-122",
    currentStudyMonth: 12,
    isGraduate: false,
    direction: "Frontend",
    monthsCompleted: 2
};
console.log("Студент:", studentInfo);


const bankAccount = {
    accountNumber: "75654546",
    currency: "KGS",
    balance: 10000,
    ownerName: "Arif Lirov",
    isBlocked: false
};
console.log("Банковский счет:", bankAccount);


var userFirstName = prompt("Введите ваше имя:");
var userLastName = prompt("Введите вашу фамилию:");
var greeting = "Здравствуйте, " + userFirstName + " " + userLastName + "!";
console.log(greeting);
document.writeln(greeting);
alert(greeting);


var number1 = Number(prompt("Введите первое число:"));
var number2 = Number(prompt("Введите второе число:"));

if (isNaN(number1) || isNaN(number2)) {
    console.log("Ошибка: введите только числа!");
} else if (number1 > number2) {
    console.log("Первое число больше второго");
} else if (number2 > number1) {
    console.log("Второе число больше первого");
} else {
    console.log("Числа равны");
}


var trafficLightColor = prompt("Введите цвет светофора (red, yellow, green):");
trafficLightColor = trafficLightColor.toLowerCase();

switch(trafficLightColor) {
    case "red":
        console.log("Стой!");
        break;
    case "yellow":
        console.log("Жди!");
        break;
    case "green":
        console.log("Иди!");
        break;
    default:
        console.log("Неизвестный цвет светофора");
}
