class Challenge {
    constructor(name, body) {
        this.name = name
        this.body = body
        this.challenges = []
    }
    submittable(challenge) { 
        if (!challenge) {
            return false
        } else {
            this.challenges.push(challenge)
            return true
        }
    }
}
export default Challenge