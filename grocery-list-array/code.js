let shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"]
console.log(shoppingList)
shoppingList.push("fruit loops")
console.log("After add fruit loops:")
console.log(shoppingList)

shoppingList[shoppingList.indexOf("coffee")] = "fair trade coffee"
console.log("Update coffee to fair trade coffee")
console.log(shoppingList)

shoppingList[shoppingList.indexOf("chips")] = "rice"
shoppingList[shoppingList.indexOf("salsa")] = "beans"
console.log("Update chips -> rice and salsa -> beans")
console.log(shoppingList)

let shoppingCart = []
shoppingCart.push( shoppingList.pop() )
shoppingCart.push( shoppingList.shift() )
console.log("Shopping list after remove the last and first item, and updated shopping cart ")
console.log(shoppingList)
console.log(shoppingCart)

while (shoppingList.length !== 0){
    shoppingCart.push( shoppingList.shift() )
}

console.log("after removing all items from list => cart")
console.log(shoppingList)
console.log(shoppingCart)

shoppingCart.sort()
console.log("Sorts the items in the cart alphabetically: " + shoppingCart.join(", "))
shoppingCart.reverse()
console.log("Reverse the order: " + shoppingCart.join(", "))
