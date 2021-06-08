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
  
// Create Contestants, function should return const 
const registerContestants = (data) => {
    let contestantsArray = data.map(entry => {
        let contestantObject = {
            name: entry.contestantName,
            hunger: entry.contestantHunger,
            cheese: {
                name: entry.cheeseName,
                deliciousness: entry.cheeseDeliciousness
            },
            disqualified: false,
            results: []
        }
        return contestantObject
    })
    return contestantsArray
}


const checkForCheeseEating = (contestant) => {
    let average = (contestant.hunger + contestant.cheese.deliciousness) / 2 
    if ( average >= 7 ) {
        contestant.disqualified = true
    }
}

const rollDatCheese = (contestant) => {
    checkForCheeseEating(contestant)
    if ( !contestant.disqualified ) {
        contestant.results.push( generateRandomRolltime() )
    }
}
  
let contestants = registerContestants(rawDataArray)
console.log(contestants)

// Roll Dat Cheese
contestants.forEach( contestant => {
    for (let i = 0; i < 3; i++) {
        rollDatCheese(contestant)
    }
})
  

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
  
  