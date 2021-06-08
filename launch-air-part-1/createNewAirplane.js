let createNewAirplane = (make, model, capacity) => {
    let airplaneObject = {
        make,
        model,
        capacity,
        flights: [],
        scheduleFlight(flight) {
            this.flights.push(flight)
        }
    }
    return airplaneObject
}

export default createNewAirplane