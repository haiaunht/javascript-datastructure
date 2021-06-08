allSeeds = [
  "arugula",
  "kale",
  "romaine",
  "iceberg",
  "beet",
  "potato",
  "carrot",
  "garlic",
  "onion",
  "strawberry",
  "raspberry",
  "blackberry",
  "blueberry",
  "roma tomato",
  "acorn squash",
  "ugly tomato",
  "cherry tomato",
  "butternut squash",
  "jalapeno pepper",
  "cayenne pepper",
  "banana pepper",
  "poblano pepper"
]

fruits = [
  "strawberry",
  "raspberry",
  "blackberry",
  "blueberry",
  "roma tomato",
  "ugly tomato",
  "acorn squash",
  "cherry tomato",
  "butternut squash",
  "jalapeno pepper",
  "cayenne pepper",
  "banana pepper",
  "poblano pepper"
]

vegetables = [
  "beet",
  "potato",
  "carrot",
  "garlic",
  "onion"
]

leafyGreens = [
  "arugula",
  "kale",
  "romaine",
  "iceberg"
]

myGarden = []


//return every kind of tomato seed you can order from the allSeeds array
let findTomato = (seed) => {
  return seed.includes("tomato")
}
let tomato = allSeeds.filter(findTomato)
tomato.forEach( seed => {
  myGarden.push(seed)
})
console.log(myGarden)


//return every berry seed in the allSeeds array, then add those seed names to the array myGarden.
let findBerry = (seed) => {
  return seed.includes("berry")
}
let berries = allSeeds.filter(findBerry)
berries.forEach( seed => {
  myGarden.push(seed)
})
console.log(myGarden)


// return every pepper in the allSeeds array that does NOT have the word "cayenne"
let findPepper = (seed) => {
  return (seed.split(" ").includes("pepper") && !seed.split(" ").includes("cayenne"))
}
let peppers = allSeeds.filter(findPepper)
peppers.forEach( seed => {
  myGarden.push(seed)
})
console.log(myGarden)


// return an alphabetized list of all the seeds available, but does not include any of the seeds currently inside myGarden.
let availableSeedNotInMyGarden = allSeeds.sort().filter( seed => {
  if (!myGarden[myGarden.indexOf(seed)] ) {
    return seed
  }
})
console.log(availableSeedNotInMyGarden)


//removes all the tomatoes, peppers, and squash from the fruits array and adds them to the vegetables array.
fruits = fruits.filter((fruit) => {
  if (!fruit.includes("tomato") && !fruit.includes("pepper") && !fruit.includes("squash")) {
    return fruit
  } else {
    vegetables.push(fruit)
  }
});


//Iceberg lettuce is the worst kind of lettuce, and we all know it. Write some code that deletes that option from all of the arrays that contain it.
allSeeds = allSeeds.filter( seed => {
  return !seed.toLowerCase().includes("iceberg")
})
// ====> same as //
//allSeeds = allSeeds.filter( seed => !seed.toLowerCase().includes("iceberg"))

leafyGreens = leafyGreens.filter( green => {
  return !green.toLowerCase().includes("iceberg")
})
// ====> same as 
//leafyGreens = leafyGreens.filter( green => !green.toLowerCase().includes("iceberg")

//return the first squash found in the allSeeds array, then add that to myGarden.
let findSquash = (seed) => {
  return seed.toLowerCase().includes("squash")
}

myGarden.push( allSeeds.find( findSquash ) )


//We've lost track of what we want to order. Write some code that logs each item from your myGarden array, then tells you how many plants you've selected in total.
console.log("I currently have " + myGarden.length + " items: " + myGarden.join(", "))
