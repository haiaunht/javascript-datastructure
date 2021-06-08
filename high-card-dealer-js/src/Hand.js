class Hand {
  // your code here
  constructor(cards) {
    this.cards = cards
  }

  value() {
    let sum = 0
    this.cards.forEach(element => {
      sum += element.value()
    })
    return sum
  }

  outputAllHand() {
    let string = ""
    for(let i=0; i<4; i++) {
      if (i === 3 ){
        string += `${this.cards[i].rank}${this.cards[i].suit}`
      } else {
        string += `${this.cards[i].rank}${this.cards[i].suit},`
      }
    }
    return string
  }
}

export default Hand