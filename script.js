const hamburguer = document.querySelector('.header__ham')
const mobileMenu = document.querySelector('.header__menu')

const globalShadow = document.querySelector('.global-shadow')

const modalCross = document.querySelector('.main__project__cross')
const modalMenu = document.querySelector('.main__project')
const modalButton = document.querySelector('.main__header__button')

let isDisplayed = false;

let isModalDisplayed = false;

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
    // globalShadow.style.opacity = '.2'
}  

const closeModal = () => {
    modalMenu.style.transform = 'scale(0) translateX(-50%)'
    // globalShadow.style.opacity = '0'
} 
    


hamburguer.addEventListener('click', displayMenu)

modalButton.addEventListener('click', openModal)

modalCross.addEventListener('click', closeModal)
