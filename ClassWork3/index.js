var input = prompt('Введите число от 2 до 10:');
if (input !== null) {
    var n = parseInt(input, 10);
    if (n >= 2 && n <= 10) {
        for (var i = 1; i <= 10; i++) {
            console.log(n + ' × ' + i + ' = ' + (n * i));
        }
    } else {
        console.log('Нужно число от 2 до 10');
    }
}

var cards = ["46782346", "45781218", "79874568", "12157845", "46151845", "41250895", "41201961"];
var count = 0;
for (var j = 0; j < cards.length; j++) {
    if (cards[j][0] === '4') {
        count++;
    }
}
console.log('Карт VISA ' + count + ' из ' + cards.length + '.');



var cardInput = prompt('Введите тип карты (SILVER, GOLD, PLATINUM):');
if (cardInput !== null) {
    var cardType = cardInput.trim().toUpperCase();
    var litersInput = prompt('Сколько литров вы заправили?');
    if (litersInput !== null) {
        var liters = parseFloat(litersInput);
        if (!isNaN(liters) && liters >= 0) {
            var pointsPerLiter = 0;
            if (cardType === 'SILVER') {
                pointsPerLiter = 0.5;
            } else if (cardType === 'GOLD') {
                pointsPerLiter = 0.75;
            } else if (cardType === 'PLATINUM') {
                pointsPerLiter = 1;
            } else {
                console.log('Неизвестный тип карты. Используйте SILVER, GOLD или PLATINUM.');
            }

            if (pointsPerLiter > 0) {
                var totalPoints = liters * pointsPerLiter;
                console.log('Карта: ' + cardType + '. Литров: ' + liters + '. Баллов: ' + totalPoints + '.');
            }
        } else {
            console.log('Введите корректное число литров.');
        }
    }
}