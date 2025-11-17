// Gmail validation functionality
document.addEventListener('DOMContentLoaded', function() {
    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');

    // Regular expression for Gmail validation
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Function to validate Gmail
    function validateGmail(email) {
        return gmailRegex.test(email);
    }

    // Function to display validation result
    function displayResult(isValid, email) {
        if (email.trim() === '') {
            gmailResult.textContent = 'Пожалуйста, введите email';
            gmailResult.style.color = '#ff6b6b';
            return;
        }

        if (isValid) {
            gmailResult.textContent = '✓ Валидный Gmail адрес';
            gmailResult.style.color = '#51cf66';
        } else {
            gmailResult.textContent = '✗ Неверный формат Gmail';
            gmailResult.style.color = '#ff6b6b';
        }
    }

    // Event listener for button click
    gmailButton.addEventListener('click', function() {
        const email = gmailInput.value.trim();
        const isValid = validateGmail(email);
        displayResult(isValid, email);
    });

    // Event listener for Enter key in input field
    gmailInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const email = gmailInput.value.trim();
            const isValid = validateGmail(email);
            displayResult(isValid, email);
        }
    });

    // Real-time validation as user types (optional)
    gmailInput.addEventListener('input', function() {
        const email = gmailInput.value.trim();
        if (email.length > 0) {
            const isValid = validateGmail(email);
            displayResult(isValid, email);
        } else {
            gmailResult.textContent = '';
        }
    });

    /**
     * Home work 1 (part 2) - DVD style bouncing cube
     */
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');

    if (parentBlock && childBlock) {
        let parentWidth = parentBlock.clientWidth;
        let parentHeight = parentBlock.clientHeight;
        const childWidth = childBlock.offsetWidth;
        const childHeight = childBlock.offsetHeight;

        let posX = Math.random() * (parentWidth - childWidth);
        let posY = Math.random() * (parentHeight - childHeight);
        let velocityX = 2 + Math.random() * 2; // between 2-4
        let velocityY = 2 + Math.random() * 2;

        const colors = ['#7cb342', '#3d6b1f', '#a4f83a', '#5effa9', '#c0ff3e'];

        function setPosition() {
            childBlock.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        }

        function changeColor() {
            const color = colors[Math.floor(Math.random() * colors.length)];
            childBlock.style.backgroundColor = color;
            childBlock.style.boxShadow = `0 0 20px ${color}`;
        }

        function animate() {
            posX += velocityX;
            posY += velocityY;

            if (posX <= 0 || posX >= parentWidth - childWidth) {
                velocityX = -velocityX;
                posX = Math.max(0, Math.min(posX, parentWidth - childWidth));
                changeColor();
            }

            if (posY <= 0 || posY >= parentHeight - childHeight) {
                velocityY = -velocityY;
                posY = Math.max(0, Math.min(posY, parentHeight - childHeight));
                changeColor();
            }

            setPosition();
            requestAnimationFrame(animate);
        }

        function updateBounds() {
            parentWidth = parentBlock.clientWidth;
            parentHeight = parentBlock.clientHeight;
        }

        window.addEventListener('resize', updateBounds);
        changeColor();
        setPosition();
        requestAnimationFrame(animate);
    }

    /**
     * Home work 2 - Stopwatch
     */
    const minutesField = document.getElementById('minutesS');
    const secondsField = document.getElementById('secondsS');
    const millisecondsField = document.getElementById('ml-secondsS');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    if (minutesField && secondsField && millisecondsField && startButton && stopButton && resetButton) {
        let startTimestamp = 0;
        let elapsedTime = 0;
        let timerId = null;

        function format(value, digits = 2) {
            return String(value).padStart(digits, '0');
        }

        function render(timeMs) {
            const minutes = Math.floor(timeMs / 60000);
            const seconds = Math.floor((timeMs % 60000) / 1000);
            const milliseconds = Math.floor((timeMs % 1000) / 10); // hundredths

            minutesField.textContent = format(minutes);
            secondsField.textContent = format(seconds);
            millisecondsField.textContent = format(milliseconds);
        }

        function startTimer() {
            if (timerId !== null) return;
            startTimestamp = Date.now() - elapsedTime;
            timerId = setInterval(() => {
                elapsedTime = Date.now() - startTimestamp;
                render(elapsedTime);
            }, 10);
        }

        function stopTimer() {
            if (timerId === null) return;
            clearInterval(timerId);
            timerId = null;
        }

        function resetTimer() {
            stopTimer();
            elapsedTime = 0;
            render(elapsedTime);
        }

        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);

        render(0);
    }
});
