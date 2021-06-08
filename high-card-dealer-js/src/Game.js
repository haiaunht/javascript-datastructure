import Deck from './Deck.js'
import Card from './Card.js'
import Hand from './Hand.js'

// GAME START
console.log("GAME START!.")

// Your game logic here.
let deck = new Deck()
console.log("There are 52 cards in the deck.\n\n")

let player1 = []
let player2 = []

for (let i=0; i<4; i++) {
    player1.push(deck.deal())
    player2.push(deck.deal())
}


let hand1 = new Hand(player1)
console.log("Player 1 was dealt " + hand1.outputAllHand())
let hand2 = new Hand(player2)
console.log("Player 2 was dealt " + hand2.outputAllHand())

let total1 = hand1.value()
console.log(`\nPlayer 1's hand value: ${total1}`)
let total2 = hand2.value()
console.log(`Player 2's hand value: ${total2}\n`)

if (total1 === total2) {
    console.log("TIE!.")
} else if (total1 > total2) {
    console.log("Congrats! Player 1, you win!")
} else {
    console.log("Congrates! Player 2, you win!")
}

