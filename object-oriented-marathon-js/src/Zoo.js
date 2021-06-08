import Cage from "./Cage.js"

class Zoo {
    constructor(name) {
        this.name = name 
        this.cages = []        
        this.employees = []

        for (let i=0; i<10; i++) {
            this.cages.push(new Cage())
        }
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }
    addAnimal(animal) {
        let firstOpenCage = this.cages.find( cage => cage.isEmpty())

        if (firstOpenCage) {
            firstOpenCage.animal = animal
        } else {
            return "All of the cages are full!"
        }
    }
    visit() {
        let greetFromAnimalAndEmployee = ""
        this.cages.forEach( cage => {
            if (cage.animal) {
                greetFromAnimalAndEmployee += cage.animal.speak() + "\n"
            }
        })
        this.employees.forEach(employee => greetFromAnimalAndEmployee += employee.greet() + "\n")
        return greetFromAnimalAndEmployee
    }

}

export default Zoo