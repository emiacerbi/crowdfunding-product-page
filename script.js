const hamburguer = document.querySelector('.header__ham')
const mobileMenu = document.querySelector('.header__menu')

const modalMenu = document.querySelector('.main__project')
const modalButton = document.querySelector('.main__header__button')
const modalCross = document.querySelector('.main__project__cross')
const accordions = document.querySelectorAll('.main__project__card__acc')

const priceInputs = document.querySelectorAll('.main__project__card__acc__input')
const priceButton = document.querySelectorAll('.main__project__card__acc__cont')

const backedAmount = document.getElementById('backed-amount')
const backersAmount = document.getElementById('backers-amount')
const percentageBar = document.getElementById('progress-bar')

let initialBackedAmount = 89914
let initialBackers = 5007
let initialPercentage = String(initialBackedAmount).slice(0, 2)


// backedAmount.innerText = `$${initialBackedAmount}`



const radio = document.getElementsByName('pledge')


for (let button of radio) {

    button.addEventListener('click', () => {
    
        for(let acc of accordions) {
            acc.classList.remove('active')            
        }

        for (price of priceInputs) {
            price.value = null
        }

        if(button.checked) {
            if(button.value === 'no-reward') {
                accordions[0].classList.add('active')
            } 
    
            else if (button.value === 'bamboo'){
                accordions[1].classList.add('active')
            } 

            else if (button.value === 'black') {
                accordions[2].classList.add('active')
            }
        }
    })
    
}


let isDisplayed = false;

const displayMenu = () => {

    if (!isDisplayed) {
        mobileMenu.style.top = '100px'
        isDisplayed = true;
    } else if (isDisplayed) {
        mobileMenu.style.top = '-500px'
        isDisplayed = false;
    }
    
}

const openModal = () => {
    modalMenu.style.transform = 'scale(1) translateX(-50%)'    
}  

const closeModal = () => {
    modalMenu.style.transform = 'scale(0) translateX(-50%)'
} 

const getBackers = () => {
    initialBackers++
    backersAmount.innerText = `${initialBackers}`
}

const getPledgePrice = () => {
    for (price of priceInputs) {
        if (parseInt(price.value) > 0) {
            initialBackedAmount += parseInt(price.value)
            backedAmount.innerText = `$${initialBackedAmount}`

            initialPercentage = String(initialBackedAmount).slice(0, 2)

            if (initialBackedAmount > 100000) {
                percentageBar.style.width = "100%"
            } else {
                percentageBar.style.width = `${initialPercentage}%`
            }
            
            price.value = null

            getBackers()
        } 
    }
}


hamburguer.addEventListener('click', displayMenu)
modalButton.addEventListener('click', openModal)
modalCross.addEventListener('click', closeModal)

for (let pButton of priceButton) {
    pButton.addEventListener('click', getPledgePrice)
}

console.log(parseInt('3'))