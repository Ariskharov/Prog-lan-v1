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

//TAP SLIDER
const tabsContentCards = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const tabsItemsParents =  document.querySelector('.tab_content_items');


const hightTabsContentCards = () =>{
    tabsContentCards.forEach((tabsContentCard)=>{
        tabsContentCard.style.display = 'none'
    })
    tabsItems.forEach((tabItem)=>{
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement = 0)=>{
    tabsContentCards[indexElement].style.display = 'block';
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

hightTabsContentCards();
showTabsContentCards();

let curretIndex = 0; // Первая вкладка
let intervalId; //Переменная для хранения интервала

//Ф-ция для автоматического переключения

const startAuthoSlider = ()=>{
    intervalId = setInterval(()=>{
        hightTabsContentCards();
        showTabsContentCards(curretIndex);
        curretIndex = (curretIndex +1) % tabsItems.length;
    }, 2000); // 2сек
}
//Запуск автослайдера
startAuthoSlider();

//Остановка слайдера при клике на вкладку

tabsItemsParents.onclick = (event) => {
    clearInterval(intervalId);
    if (event.target.classList.contains('tab_content_item')){
        tabsItems.forEach((tabItem, tabItemIndex) =>{
            if(event.target === tabItem){
                hightTabsContentCards();
                showTabsContentCards(tabItemIndex);
                curretIndex = tabItemIndex;
                startAuthoSlider();
            }
        })
    }
}

// Получаем input элементы
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, target1, target2, currentType) => {
    element.addEventListener('input', async () => {
        try {
            const response = await fetch('../data/converter.json');
            if (!response.ok) throw new Error('Не удалось загрузить данные');

            const data = await response.json();
            const value = parseFloat(element.value);

            if (!element.value || isNaN(value)) {
                target1.value = '';
                target2.value = '';
                return;
            }

            switch(currentType) {
                case 'som':
                    target1.value = (value / data.usd).toFixed(2);
                    target2.value = (value / data.eur).toFixed(2);
                    break;
                case 'usd':
                    target1.value = (value * data.usd).toFixed(2);
                    target2.value = ((value * data.usd) / data.eur).toFixed(2);
                    break;
                case 'eur':
                    target1.value = (value * data.eur).toFixed(2);
                    target2.value = ((value * data.eur) / data.usd).toFixed(2);
                    break;
            }
        } catch (error) {
            console.error(error);
        }
    });
};

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput, 'usd');
converter(eurInput, somInput, usdInput, 'eur');


//Card Swicher

const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let count = 1
const totalCards = 200

async function getCardData(cardNumber){
    try{

        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`);
        if(!response.ok){
            throw new Error('Error in server')
        }
        return await response.json()

    }catch (error){
        console.log('errrr data: ', error);
        return null;
        
    }
}

function updateCard(cardData){
    card.innerHTML = `
    <p>${cardData.title}</p>
    <p style='color: ${cardData.completed ? "green": "yellow"}'> ${cardData.completed}
    <span>${cardData.id}</span>
    `
}