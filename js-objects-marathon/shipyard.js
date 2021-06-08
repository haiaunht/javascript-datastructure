import createNewSpaceship from './createNewSpaceship.js'
import createNewCrewMember from './createNewCrewMember.js'
import createNewRocket from './createNewRocket.js'

let launchpad = (ship, crewname) =>{
    console.log(`Initiating preflight procedures`);
    crewNames.forEach(crewMember => {
      ship.loadCrew(crewMember)
    })
    console.log(`${ship.captain()} is the new Captain`)
      ship.mountPropulsion(ourFirstRocket)
      debugger
      ship.propulsion.addFuel(5)
      ship.takeoff()
      ship.countdown(10)
   }
   
   let trainCrew = (array) => {
     let crewList = array.map( (member) => {
       let newMember = createNewCrewMember(member)
       newMember.trained = true
       return newMember
     })
     return crewList
   }
   
   
   
   // This is where we start using the code we're writing:
   let ourShip = createNewSpaceship("MilleniumFalcon")
   let crewNames = ["Kenneth","Pat","Neil","Sally" ]
   let spaceShipAwesomeCrew = trainCrew( crewNames )
   let ourFirstRocket = createNewRocket()
   
   
   launchpad(ourShip,spaceShipAwesomeCrew)
   