document.addEventListener('DOMContentLoaded', () => {
	const phoneInput = document.getElementById('phone_input')
	const phoneButton = document.getElementById('phone_button')
	const phoneResult = document.getElementById('phone_result')

	const iinInput = document.getElementById('iin_input')
	const iinButton = document.getElementById('iin_button')
	const iinResult = document.getElementById('iin_result')

	const ruPhoneRegex = /^(?:\+7|8)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/

	const iinRegex = /^\d{12}$/

	function showResult(element, isValid) {
		if (!element) return
		element.textContent = isValid ? 'Валидно' : 'Невалидно'
		element.style.color = isValid ? 'green' : 'red'
	}

	if (phoneButton && phoneInput && phoneResult) {
		phoneButton.addEventListener('click', () => {
			const value = phoneInput.value.trim()
			showResult(phoneResult, ruPhoneRegex.test(value))
		})
	}

	if (iinButton && iinInput && iinResult) {
		iinButton.addEventListener('click', () => {
			const value = iinInput.value.trim()
			showResult(iinResult, iinRegex.test(value))
		})
	}
})

