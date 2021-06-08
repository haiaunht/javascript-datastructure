class BankAccount {
    constructor(initialBalance) {
        this.initialBalance = initialBalance
        this.transaction = []
    }
    addTransaction(amount) {
        this.initialBalance += amount
        if (amount > 0) {
            console.log(`Deposit $${amount} successful. Your balance now is: $${this.initialBalance}`)
        } else {
            console.log(`Here is your withdraw money of $${amount * -1}. Your balance now is: $${this.initialBalance}`)
        }
    }
    getCurrentBalance() {
        console.log(`Your current balance is: ${this.initialBalance}`)
        return this.initialBalance
    }
}

export default BankAccount