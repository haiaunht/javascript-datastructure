class Session {
    constructor(title, facilitator, startTime, endTime) {
        this._title = title
        this._faciliator = facilitator
        this._startTime = startTime
        this._endTime = endTime
    }
    get title() {
        return this._title
    }
    get facilitator() {
        return this._faciliator
    }
    get startTime() {
        return this._startTime
    }
    get endTime() {
        return this._endTime
    }
}

export default Session