import createNewAirplane from './createNewAirplane.js'
import createNewFlight from './createNewFlight.js'

let magic777 = createNewAirplane('Magic', '777', 150)
let maidenFlight = createNewFlight('September 2','10AM','1PM','Boston','San Diego')
magic777.scheduleFlight(maidenFlight)
console.log(magic777)
