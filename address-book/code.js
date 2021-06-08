let addressBook = {
  "Mark Zuckerberg": "markymark@example.com",
  "Grace Hopper": "foundABug@example.com",
  "Alan Turing": "alanTheMachine@example.com",
  "Sister Mary Kenneth Keller": "theOGDoctor@example.com",
  "Ada Lovelace": "kindaCalledThisWholeComputerThing@example.com",
  "Bill Gates": "noBlueScreens@example.com"
}

const allName = []

const lowerCaseAddress = (object) => Object.keys(object).reduce((acc, key) => {
  acc[key.toLowerCase()] = object[key]
  return acc
}, {}) 

let addressLower = lowerCaseAddress(addressBook)

let nameToLookUp = prompt("Please enter the name you are looking for.")
while ( nameToLookUp !== null  && nameToLookUp !== "exit") {  
    if (addressBook[nameToLookUp]) {
      console.log(addressBook[nameToLookUp])
    } else if ( addressLower[nameToLookUp]) {
      console.log(addressLower[nameToLookUp])
    } else if (!addressBook[nameToLookUp] || !addressLower[nameToLookUp]) {
      let wantToAdd = prompt('Would you like to add this name into the address book? (y/n)') 
      if ( wantToAdd == 'Y' || wantToAdd == 'y') {
        let emailToAdd = prompt('Please enter the email.')
        addressBook[nameToLookUp] = emailToAdd        
      }
    } 
    nameToLookUp = prompt("Please enter the name you are looking for.")
}


