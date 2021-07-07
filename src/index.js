import cardsTemplate from './tempates/cards.hbs'
import dishes from './menu.json'

// console.log(dishes.forEach(dish => cardsTemplate(dish).join(' ')))
const menuList = document.querySelector(".js-menu")
const dishesGrid = dishes.map(cardsTemplate).join(' ')

menuList.insertAdjacentHTML('afterbegin', dishesGrid)