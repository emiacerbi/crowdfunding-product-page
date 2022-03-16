const hamburguer = document.querySelector('.header__ham')
const mobileMenu = document.querySelector('.header__menu')

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

hamburguer.addEventListener('click', displayMenu)