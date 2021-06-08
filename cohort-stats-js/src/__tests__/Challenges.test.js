import Challenge from '../Challenge.js'
import SystemCheck from '../SystemCheck.js'

describe("Testing Challenge class and only #submittable of SystemCheck class", () => {
    let challenge  
    let systemCheck  
    let newDueDate

    beforeEach(() => {
        newDueDate = new Date("2021-02-05")
        challenge = new Challenge("cohor-stats-exceeds", "This system Test is hard")
        systemCheck = new SystemCheck("cohort-stats", newDueDate)
    })

    it("name should be cohor-stats", () => {
        expect(challenge.name).toEqual("cohor-stats-exceeds")
    })

    it("body should be This system Test is hard", () => {
        expect(challenge.body).toEqual("This system Test is hard")
    })

    it("#submittable of Challenges class pass a challenge, should return true", () => {
        expect(challenge.submittable("Cohor-stats-challenges")).toEqual(true)
    })

    it("#submittable of SystemCheck class pass a system, should return true", () => {
        expect(systemCheck.submittable(challenge)).toEqual(true)
    })
})