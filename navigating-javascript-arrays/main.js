let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."
let supplyCheck = (list) => {
    list.forEach((element) => {
        console.log(`${element} is logged and accounted for.`)
    });
}
supplyCheck(supplies)

// 2.) Create a function named stowSupplies that takes in our array of supplies, and returns item name and its index number in a formatted string.
let stowSupplies = (list) => {
    list.forEach((item,index) => {
        console.log(`${item} is in locker ${index+1}`)
    })
}
stowSupplies(supplies)


// 3.) Create a function named addAlphabetically that takes in our array of supplies and a new supply item and returns an array of supplies with that new item, sorted alphabetically.
let addAlphabetically = (list, newItem) => {
    list.push(newItem)
    return list.sort()
}
let sortedSupplies = addAlphabetically(supplies, "laser pistol")
console.log(sortedSupplies)


// 4.) Create a function named stockCheck that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.

let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]

let stockCheck = (checklists, arrayList) => {
    let nonMatchItem = checklists.filter( item => !arrayList.includes(item))
    return nonMatchItem
}
console.log(stockCheck(inventoryChecklist, supplies))

// 5.) Create a function named addMissingSupplies that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your stockCheck method to help you with this.
let addMissingSupplies = (arraySupplies, func) => {
    return arraySupplies.concat(func)
}
console.log( addMissingSupplies(supplies, stockCheck(inventoryChecklist, supplies)) )

