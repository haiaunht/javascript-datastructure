import Deck from '../Deck.js'
import Hand from '../Hand.js'

// Your tests here
describe('the game', () => {
    let deck 
    let hand

    beforeEach(() => {
        deck = new Deck()
        hand = new Hand([{rank:10, suit:'♦'}, {rank:3, suit:'♦'}, {rank:4, suit:'♦'}, {rank:6, suit:'♦'}])
    })

    it("should be 52 cards here", () => {
        expect(deck.buildDeck().length).toEqual(52)
    })
    
    // it("test total of hands" ,() => {
    //     expect(hand.value()).toEqual(23)
    // })
})
