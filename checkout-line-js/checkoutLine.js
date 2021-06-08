let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]

let coffeeItem = shoppingCart.find( item => item.itemName === 'lbs. of coffee')
let milkItem = shoppingCart.find(item => item.itemName === 'gallon of milk')

console.log(`${coffeeItem.itemName} is ${coffeeItem.price}`)
console.log(`There is ${milkItem.quantity} ${milkItem.itemName} `)

let total = 0
shoppingCart.forEach(item => total += item.price * item.quantity)
console.log(`Subtotal is $${total}`)
console.log(`The total is $${Math.round((total + total * 0.0625) * 100 ) / 100 }`)
