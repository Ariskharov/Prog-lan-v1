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
});
