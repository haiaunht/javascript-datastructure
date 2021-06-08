class Person {
    constructor(firstName, lastName, email) {
        this._firstName = firstName
        this._lastName = lastName
        this._email = email
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }

    get email() {
        return this._email
    }
}

export default Person