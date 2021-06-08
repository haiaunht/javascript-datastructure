
import Ticket from './Ticket.js'

class Passenger {
    constructor(name) {
        this.name = name
        this.flights = []
    }
    purchaseTicket(flight, seatNumber) {
        let newTicket = new Ticket(flight, this, seatNumber)
        this.flights.push(flight)
        return newTicket
    }
}

export default Passenger