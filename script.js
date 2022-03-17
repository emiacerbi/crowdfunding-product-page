// Radio buttons
const radio = document.getElementsByName('pledge')

// Shadow for the modal menu
const globalShadow = document.querySelector('.global-shadow')

const hamburguer = document.querySelector('.header__ham')
const mobileMenu = document.querySelector('.header__menu')

const selectButton = document.querySelectorAll('.main__about__reward__button')

const modalMenu = document.querySelector('.main__project')
const modalButton = document.querySelector('.main__header__button')
const modalCross = document.querySelector('.main__project__cross')
const accordions = document.querySelectorAll('.main__project__card__acc')

const priceInputs = document.querySelectorAll('.main__project__card__acc__input')
const priceButton = document.querySelectorAll('.main__project__card__acc__cont')

const backedAmount = document.getElementById('backed-amount')
const backersAmount = document.getElementById('backers-amount')
const percentageBar = document.getElementById('progress-bar')

const thankCard = document.querySelector('.thank-card')
const supportButton = document.querySelector('.thank-card__button')


// Bookmark functionality
const bookmarkButton = document.querySelector('.main__header__bookmark')
let isBookmarked = false

bookmarkButton.addEventListener('click', () => {
    
    if (!isBookmarked) {
        bookmarkButton.classList.add('active')
        document.querySelector('.main__header__bookmark__svg__content').innerText = 'Bookmarked'
        isBookmarked = true
    } else if (isBookmarked) {
        bookmarkButton.classList.remove('active')
        document.querySelector('.main__header__bookmark__svg__content').innerText = 'Bookmark'
        isBookmarked = false
    }
    
})


// Sets "Pledge with no reward as default radio button"
document.getElementById('no-reward').checked = true;

// Variables
let initialBackedAmount = 89914
let initialBackers = 5007
let initialPercentage = String(initialBackedAmount).slice(0, 2)


// Close all pricing accordions
const closeAccordions = () => {
    for(let acc of accordions) {
        acc.classList.remove('active')            
    }
}

for (let button of radio) {

    button.addEventListener('click', () => {
    
        closeAccordions()

        for (price of priceInputs) {
            price.value = null
        }

        if(button.checked) {
            if(button.value === "0") {
                accordions[button.value].classList.add('active')
            } 
    
            else if (button.value === "1"){
                accordions[button.value].classList.add('active')
            } 

            else if (button.value === "2") {
                accordions[button.value].classList.add('active')
            }
        }
    })
    
}


// Mobile menu functionality

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

// Modal functionality

const openModal = () => {
    modalMenu.style.transform = 'scale(1) translateX(-50%)'    
    globalShadow.style.opacity = "0.7"
    window.scrollTo(0, 87.5)
}  

const closeModal = () => {
    modalMenu.style.transform = 'scale(0) translateX(-50%)'
    globalShadow.style.opacity = "0"
} 

const getBackers = () => {
    initialBackers++
    backersAmount.innerText = `${initialBackers}`
}

const displayThanks = () => {
    thankCard.style.scale = "1"
    globalShadow.style.opacity = "0.7"
}

const getPledgePrice = () => {
    for (let price of priceInputs) {

        // Converts price value to num and checks if it's bigger than 0
        if (parseInt(price.value) > 0) {
            initialBackedAmount += parseInt(price.value)
            backedAmount.innerText = `$${initialBackedAmount}`

            // Get the two first digits for the progress bar
            initialPercentage = String(initialBackedAmount).slice(0, 2)

            if (initialBackedAmount > 100000) {
                percentageBar.style.width = "100%"
            } else {
                percentageBar.style.width = `${initialPercentage}%`
            }
            
            price.value = null

            getBackers()
            closeModal()
            displayThanks()
        } 
    }
}

hamburguer.addEventListener('click', displayMenu)
modalButton.addEventListener('click', openModal)
modalCross.addEventListener('click', closeModal)

window.addEventListener('keyup', (e) => {
    if (e.key === "Escape") {
        closeModal()
        closeThanksCard()
    }
})

for (let pButton of priceButton) {
    pButton.addEventListener('click', getPledgePrice)
}

for (let btn of selectButton) {
    btn.addEventListener('click', openModal)

    btn.addEventListener('click', () => {

        closeAccordions()

        if (btn.id === "1") {
            accordions[btn.id].classList.add('active')
            document.getElementById("bamboo").checked = true
        } 
        else if (btn.id === "2") {
            accordions[btn.id].classList.add('active')
            document.getElementById("black").checked = true
        }
    })

}

const closeThanksCard = () => {
    thankCard.style.scale = '0'
    globalShadow.style.opacity = '0'
}

supportButton.addEventListener('click', closeThanksCard)

window.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        getPledgePrice()
    }
})