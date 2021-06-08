class SystemCheck {
    constructor(name, dueDate) {
        this.name = name
        this.dueDate = dueDate
        this.submissions = []
    }
    addSubmission(submission) {
        this.submissions.push(submission)
    }
    averageGrade() {
        //iterate through 
        let sum = 0
        let count = 0
        this.submissions.forEach( submission => {
            sum += submission.grade
            count++
        })
        return sum / count
    }
    didStudentCompleteSystemCheck(student) {
        let submissionOfStudent = this.submissions.find( submission => {
            return submission.student === student
        })

        if (submissionOfStudent) {
            return true
        }
        return false
    }
    submittable(systemCheck) {
        return true
    }
}


export default SystemCheck
