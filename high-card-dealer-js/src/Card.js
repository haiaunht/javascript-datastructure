class Card {
  // Your code here
  // Functions you may need:
  // - constructor
  constructor(rank,suit){
    this.rank = rank
    this.suit = suit
  }
  value() {
    if (this.rank === "J") {
      return 11
    } else if ( this.rank === "Q") {
      return 12
    } else if (this.rank === "K") {
      return 13
    } else if (this.rank === "A") {
      return 14
    }
    return this.rank
  }
  suit() {
    return this.suit
  }
  rank() {
    return this.rank
  }
  print() {
    return `${this.rank}, ${this.suit}}`
  }
}

export default Card
