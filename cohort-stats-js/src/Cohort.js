class Cohort {
    constructor(title, startDate, endDate) {
        this.title = title
        this.startDate = startDate
        this.endDate = endDate
        this.students = []
        this.systemChecks = []
    }
    enroll(student) {
        if (!this.students.includes(student)) {
            this.students.push(student)
        }
    }
    assign(systemCheck) {
        this.systemChecks.push(systemCheck)
    }
    roster() {
        let outputString = `Cohort: ${this.title}\n--------------------\n`
        this.students.forEach( student => {
            outputString += `${student.name} ${student.email}\n`
        })
        return outputString
    }
    systemCheckCompleted(systemCheck) {
        let countDone = 0
        this.students.forEach( student => {
            if (systemCheck.didStudentCompleteSystemCheck(student)){
                countDone++
            }
        })
        if (countDone === 1) return false
        if (countDone === this.students.length) return true    
    }
}

export default Cohort
