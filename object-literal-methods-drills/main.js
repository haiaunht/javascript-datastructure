let guybrushThreepwood = {
    firstName: "Guybrush",
    lastName: "Threepwood",
    title: "mighty pirate",
    lungCapacityMinutes: 10,
    breathHeldMinutes: 0,
    gameOver: false,
    inventory: [],
    haveGrog: false,
    greet() {
        console.log(`I'm ${this.firstName} ${this.lastName}, ${this.title}`)
    },
    holdBreath() {
        this.breathHeldMinutes++
        if (this.breathHeldMinutes >= this.lungCapacityMinutes) {
            this.gameOver = true
            console.log("Sorry! Game over")
        }
    },
    addToInventory(item) {
        if (!this.inventory.includes(item)) {
            this.inventory.push(item)
        }
    },
    checkGrogStatus() {
        if (this.inventory.includes("red dye #2") && this.inventory.includes("battery acid")) {
            console.log(`Makin' some grog!`)
            this.haveGrog = true
        } else {
            console.log("Where has all the grog gone?")
        }
    }
}

console.log(Object.keys(guybrushThreepwood))
console.log(Object.values(guybrushThreepwood))

guybrushThreepwood.addToInventory("red dye #2")
console.log(guybrushThreepwood.checkGrogStatus())

guybrushThreepwood.addToInventory("battery acid")
console.log(guybrushThreepwood.checkGrogStatus())


