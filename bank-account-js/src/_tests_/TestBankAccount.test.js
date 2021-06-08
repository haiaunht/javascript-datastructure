import BankAccount from '../../BankAccount.js'

describe("Initiate an account with 1000 dollar", () => {
    let bank

    beforeEach(() => {
        bank = new BankAccount(1000)
    })

    test("I should have $1000", () => {
        expect(bank.getCurrentBalance()).toEqual(1000)
    })

    test("withdraw $45, should have $955", () => {
        bank.addTransaction(-45)
        expect(bank.getCurrentBalance()).toEqual(955)
    })

    test("withdraw $99.95, should have $855", () => {
        bank.addTransaction(-45)
        bank.addTransaction(-99.95)
        expect(bank.getCurrentBalance()).toEqual(855.05)
    })

    test("deposit $60, should have $915.05", () => {
        bank.addTransaction(-45)
        bank.addTransaction(-99.95)
        bank.addTransaction(60)
        expect(bank.getCurrentBalance()).toEqual(915.05)
    })

    test("withdraw $34.43, should have $915.05", () => {
        bank.addTransaction(-45)
        bank.addTransaction(-99.95)
        bank.addTransaction(60)
        bank.addTransaction(-34.43)
        expect(bank.getCurrentBalance()).toEqual(880.62)
    })
})
