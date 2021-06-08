import Person from './Person.js'
import Car from './Car.js'
import Plane from './Plane.js'
import Card from './Card.js'
import Deck from './Deck.js'
import Book from './Book.js'
import Author from './Author.js'
import Movie from './Movie.js'
import Theater from './Theater.js'
import ShowTime from './ShowTime.js'

let mario = new Person('Mario', 26)
console.log(mario)
console.log(`${mario.name} is ${mario.age}`)
mario.celebrateBirthday()
console.log(`${mario.name} is ${mario.age}`)

// add our "Toyota Camry" with a mileage of 5000
let car = new Car('Toyota', 'Camry', 5000)
console.log(car)
console.log(`Our car's mileage is ${car.mileage}`)
car.drive(467)
console.log(`Our car's mileage is ${car.mileage}`)

// add our "Launch 783" plane with a capacity of 2
let plane = new Plane('Launch', '783', 2)
console.log(plane)
plane.board()
plane.board()
plane.board()


// challenge 2
let card = new Card('10', 'diamonds')
console.log(card)
let deck = new Deck()
console.log(deck)
deck.addCard(card)
console.log(deck)
console.log(deck.cards)

//challenge 3
let book = new Book("Gone with the Wind", 1037, 1936)
let margaret = new Author("Margaret", "Mitchell", "Historical Fiction")
margaret.writeBook(book)
console.log(margaret)

// I am buiding Movie class, Theater class and ShowTime class
let wonderWoman1984 = new Movie("Wonder Woman 1984", "Action", 161, 4, ["Kisten Wiig", "Gal Gadot", "Pedro Pascal"])
let seatleTheater = new Theater("AMC", "Seattle")
let wonderShowTime = new ShowTime(seatleTheater, "Sunday January 31st, 2021", wonderWoman1984)
console.log(wonderShowTime)
wonderShowTime.printShow()
