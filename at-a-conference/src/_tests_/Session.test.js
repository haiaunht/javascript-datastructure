import { iteratee } from 'lodash'
import Session from '../../Session.js'
import Person from "../../Person.js"

describe("Testing in session", () => {
    let session
    let pat

    beforeEach(() => {
        pat = new Person("Pat", "Whelan", "pat@launch.com")
        session = new Session("WTIA", pat, 9, 12)
    })

    it("Title should be WTIA", () => {
        expect(session.title).toEqual("WTIA")
    })

    it("Faciliator is Pat", () => {
        expect(session.facilitator.fullName).toEqual("Pat Whelan")
    })

    it("start time != end time", () => {
        expect(session.startTime !== session.endTime).toEqual(true)
    })

})