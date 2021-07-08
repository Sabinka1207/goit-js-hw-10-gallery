import cardsTemplate from './tempates/cards.hbs' 
import dishes from './menu.json'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuList = document.querySelector(".js-menu")
const body = document.querySelector("body")
const switcher = document.querySelector("#theme-switch-toggle")

const dishesGrid = dishes.map(cardsTemplate).join(' ')
menuList.insertAdjacentHTML('afterbegin', dishesGrid)

if (localStorage.length === 0) {
    localStorage.setItem("theme", Theme.LIGHT)
    body.classList.add(Theme.LIGHT)
}

if (localStorage.getItem("theme") === Theme.LIGHT) {
      body.classList.add(Theme.LIGHT)  
}

if (localStorage.getItem("theme") === Theme.DARK) {
    body.classList.add(Theme.DARK)
    switcher.checked = true
}

switcher.addEventListener("change", onThemeChange)

function onThemeChange() {
    if (switcher.checked === true) {
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
        localStorage.setItem("theme", Theme.DARK)
    } else {
        body.classList.add(Theme.LIGHT)
        body.classList.remove(Theme.DARK)
        localStorage.setItem("theme", Theme.LIGHT)
    }
}