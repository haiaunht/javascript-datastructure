import createNewIngredient from './createNewIngredient.js'
import createNewMeal from './createNewMeal.js'
import createNewMenu from './createNewMenu.js'

console.log("Let's build a diner!")

// Part One
let egg = createNewIngredient('egg', 'protein')
let tomato = createNewIngredient('tomato', 'fruit')
let spinach = createNewIngredient('spinach', 'vegetable')
let mushroom = createNewIngredient('mushroom', 'vegetable')
let feta = createNewIngredient('feta', 'cheese')
let cheddar = createNewIngredient('cheddar', 'cheese')
let bacon = createNewIngredient('bacon', 'meat')

// Part Two
let greekOmelette = createNewMeal('Greek Omelette', [egg, tomato, spinach, feta])
let baconCheeseOmelette = createNewMeal('Bacon and Cheese Omelette', [
  cheddar,
  egg,
  bacon  
])
let mushroomOmelette = createNewMeal('Mushroom Omelette', [egg, mushroom])
console.log('baconCheeseOmelette', baconCheeseOmelette);
console.log('Is it vegetarian?')
console.log(baconCheeseOmelette.isVegetarian())
console.log('Is it delicious?')
console.log(baconCheeseOmelette.isDelicious())

// Part Three
let breakfastMenu = createNewMenu('Breakfast', 7, 12)
breakfastMenu.addMeal(greekOmelette)
breakfastMenu.addMeal(baconCheeseOmelette)
breakfastMenu.addMeal(mushroomOmelette)
//breakfastMenu.printMenu()

// Exceeds Part Two
let lunchMenu = createNewMenu('Lunch', 12, 16)
let dinnerMenu = createNewMenu('Dinner', 16, 24)
let currentMenus = [breakfastMenu, lunchMenu, dinnerMenu]


const welcomeCustomer = () => {
    let hour = (new Date(Date.now())).getHours()
    let menuServe = ""

    if ( hour < 7 ) {
        menuServe = null
    } else if ( hour < 12 ) {
        menuServe = currentMenus[0]
    } else if ( hour < 16 ) {
        menuServe = currentMenus[1]
    } else if ( hour <= 24 ) {
        menuServe = currentMenus[2]
    } else {
        menuServe = null
    }

    let amOrPm = (time) => {
        if ( time < 12 ) {
            return time + " am"
        } else if ( time === 12 ) {
            return time + " pm"
        } else if ( time < 24 ) {
            return (time - 12) + " pm"
        } else if ( time === 24 ) {
            return (time % 24) + " am"
        }
    }

    if ( menuServe === null ) {
        console.log("Sorry! We are not open at this hour.")
    } else {
        console.log(`Welcome to our ${menuServe.title}! Here's our menu: ${menuServe.printMenu()}\nwhich we're serving until ${amOrPm(menuServe.endTime)}.`)
    }
}
welcomeCustomer()