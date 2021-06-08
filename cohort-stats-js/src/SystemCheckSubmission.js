import Grade from './Grade.js'

class SystemCheckSubmission {
    constructor(solution, student) {
        this.solution = solution
        this.student = student
        this.grade = 0
    }
    assignGrade(grade) {
        if (!(grade === Grade.doesNotMeetExpectations || grade === Grade.makeupPoint || grade === Grade.meetsExpectations || grade === Grade.exceedsExpectations)) {
            return 'Invalid Grade Error!'
        }
        return this.grade = grade
    }
}

export default SystemCheckSubmission
