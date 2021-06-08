// generate a random integer between 10 and 60
let generateRandomRolltime = () => {
  return Math.floor(Math.random() * (60 - 10 + 1) + 10)
}

let rawDataArray = [
  {
    cheeseName: 'Red Leicester',
    cheeseDeliciousness: 9,
    contestantName: 'John C',
    contestantHunger: 8
  },
  {
    cheeseName: 'Tilsit',
    cheeseDeliciousness: 3,
    contestantName: 'Michael P',
    contestantHunger: 10
  },
  {
    cheeseName: 'Caerphilly',
    cheeseDeliciousness: 5,
    contestantName: 'Eric I',
    contestantHunger: 2
  },
  {
    cheeseName: 'Bel Paese',
    cheeseDeliciousness: 4,
    contestantName: 'Graham C',
    contestantHunger: 4
  },
  {
    cheeseName: 'Red Windsor',
    cheeseDeliciousness: 9,
    contestantName: 'Terry G',
    contestantHunger: 6
  },
  {
    cheeseName: 'Stilton',
    cheeseDeliciousness: 7,
    contestantName: 'Terry J',
    contestantHunger: 1
  },
  {
    cheeseName: 'Gruyere',
    cheeseDeliciousness: 2,
    contestantName: 'Carol C',
    contestantHunger: 6
  }
]

// Create Contestants
let registerContestants = () => {
  let contestantObjects = rawDataArray.map( data => {
    let cheeseObject = {name: data.cheeseName, deliciousness: data.cheeseDeliciousness}
    let contestant = {name: data.contestantName, hunger: data.contestantHunger, cheese: cheeseObject}
    return contestant
  })

  return contestantObjects
}

let contestants = registerContestants()

// Contestant Properties

contestants = contestants.map( contestant => {
  contestant.isDisqualified = false
  contestant.results = []
  return contestant
})
console.log(contestants)


// Contestant Methods
let checkForCheeseEating = (contestant) => {
  let average = (contestant.hunger + contestant.cheese.deliciousness) / 2 
  if ( average >= 7 ) {
    contestant.isDisqualified = true
  }
}

let rollDatCheese = (contestant) => {
  checkForCheeseEating(contestant)
  if ( !contestant.isDisqualified ) {
    contestant.results.push( generateRandomRolltime() )
  }
}

// Roll Dat Cheese
contestants.forEach( contestant => {
  //checkForCheeseEating(contestant)
  for (let i = 0; i < 3; i++) {
    rollDatCheese(contestant)
  }
})
console.log("After three times of rolling")
console.log(contestants)


// Report the Results
let reportIndividualResults = (contestant) => {
  let scores = ""
  if (contestant.results.length === 0) {
    console.log(`Contestant ${contestant.name} entered this competition with a lovely ${contestant.cheese.name} cheese. However, ${contestant.name} succumbs to the ${contestant.cheese.name} cheese, resulting in disqualify. Resulting scores of ${contestant.results.length}`)
  } else {
    scores = contestant.results.join(", ")
    console.log(`Contestant ${contestant.name} entered this competition with a lovely ${contestant.cheese.name} cheese. By meeting the criteria, they were able to compete with resultings scores of ${scores}`)
  }  
}

contestants.forEach( contestant => reportIndividualResults(contestant) )

