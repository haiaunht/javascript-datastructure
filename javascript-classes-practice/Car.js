class Car {
    constructor(make, model, mileage) {
        this.make = make
        this.model = model
        this.mileage = mileage
    }
    drive(mileage) {
        this.mileage += mileage
    }
}

export default Car