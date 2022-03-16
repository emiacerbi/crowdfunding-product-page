const hamburguer = document.querySelector('.header__ham')
const mobileMenu = document.querySelector('.header__menu')

const modalMenu = document.querySelector('.main__project')
const modalButton = document.querySelector('.main__header__button')
const modalCross = document.querySelector('.main__project__cross')
const accordions = document.querySelectorAll('.main__project__card__acc')


const radio = document.getElementsByName('pledge')


for (let button of radio) {

    button.addEventListener('click', () => {
    
        for(let acc of accordions) {
            acc.classList.remove('active')
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
    

hamburguer.addEventListener('click', displayMenu)
modalButton.addEventListener('click', openModal)
modalCross.addEventListener('click', closeModal)
