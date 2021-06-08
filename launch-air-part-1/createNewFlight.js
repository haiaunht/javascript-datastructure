let createNewFlight = (date, takeoffTime, landingTime, origin, destination) => {
    let flightObject = {
        date,
        takeoffTime,
        landingTime,
        origin,
        destination
    }
    return flightObject
}

export default createNewFlight