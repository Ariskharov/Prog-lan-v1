// Игра угадай число
// Загадываем случайное число от 1 до 100
var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

// Приветствие
alert("Привет! Я загадал число от 1 до 100. Попробуй угадать!");



// Функция для проверки числа
function checkNumber() {
    // Получаем число от пользователя
    var userGuess = prompt("Введи число:");
    
    // Преобразуем в число
    var guess = parseInt(userGuess);
    
    // Увеличиваем счетчик попыток
    attempts = attempts + 1;
    
    // Проверяем что ввели число
    if (isNaN(guess)) {
        alert("Это не число! Попробуй еще раз.");
        checkNumber();
        return;
    }
    
    // Проверяем что число в нужном диапазоне
    if (guess < 1 || guess > 100) {
        alert("Число должно быть от 1 до 100!");
        checkNumber();
        return;
    }
    
    // Проверяем угадали ли
    if (guess == secretNumber) {
        alert("Поздравляю! Ты угадал за " + attempts + " попыток!");
    } else if (guess < secretNumber) {
        alert("Мое число больше чем " + guess);
        checkNumber();
    } else {
        alert("Мое число меньше чем " + guess);
        checkNumber();
    }
}

// Запускаем игру
checkNumber();
