import Person from './Person.js'
class Programmer extends Person {
    constructor(firstName, lastName, email, programLang) {
        super(firstName,lastName,email)
        this._programLang = programLang
    }
    writeCode() {
        console.log(`${this.fullName} is coding in ${this._programLang}, with email at ${this.email}`)
    }
}

export default Programmer