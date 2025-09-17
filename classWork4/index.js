function getRange(start, end, step) {
    if (step === undefined) {
        step = 1;
    }
    var result = [];
    if (step === 0) {
        return result;
    }

    if (start <= end) {
        if (step < 0) {
            step = -step;
        }
        for (var i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        if (step > 0) {
            step = -step;
        }
        for (var j = start; j >= end; j += step) {
            result.push(j);
        }
    }

    return result;
}

function myReverse(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

function maskCard(cardNumber, maskChar) {
    if (maskChar === undefined) {
        maskChar = 'X';
    }
    var str = String(cardNumber);

    if (str.length <= 10) {
        return str;
    }

    var first = str.slice(0, 6);
    var last = str.slice(-4);
    var middleLength = str.length - 10;

    var masked = "";
    for (var i = 0; i < middleLength; i++) {
        masked = masked + maskChar;
    }

    return first + masked + last;
}


var rangeStartStr = prompt('Введите начало диапазона (число):');
var rangeEndStr = prompt('Введите конец диапазона (число):');
var rangeStepStr = prompt('Введите шаг (по умолчанию 1, можно оставить пусто):');

var rangeStart = Number(rangeStartStr);
var rangeEnd = Number(rangeEndStr);
var rangeStep = (rangeStepStr === null || rangeStepStr === '') ? 1 : Number(rangeStepStr);

if (!isNaN(rangeStart) && !isNaN(rangeEnd) && !isNaN(rangeStep)) {
    var userRange = getRange(rangeStart, rangeEnd, rangeStep);
    console.log('Ваш диапазон =>', userRange);
    alert('Ваш диапазон: ' + JSON.stringify(userRange));
} else {
    alert('Диапазон: нужно вводить только числа. Пропускаю.');
}

var strToReverse = prompt('Введите строку для переворота:');
if (strToReverse !== null) {
    var reversedUser = myReverse(strToReverse);
    console.log('Переворот строки =>', reversedUser);
    alert('Переворот строки: ' + reversedUser);
}

var cardInput = prompt('Введите номер банковской карты (только цифры без пробелов):');
if (cardInput !== null) {
    var maskCharInput = prompt('Введите символ маски (по умолчанию X, можно оставить пусто):');
    var finalMaskChar = (maskCharInput === null || maskCharInput === '') ? 'X' : String(maskCharInput)[0];
    var maskedCard = maskCard(cardInput, finalMaskChar);
    console.log('Маска карты =>', maskedCard);
    alert('Маска карты: ' + maskedCard);
}


