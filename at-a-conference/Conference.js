class Conference {
    constructor(name, capacity) {
        this._name = name
        this._capacity = capacity
        this._attendees = []
        this._sessions = []
    }
    register(person) {
        let personWithThisEmail = this._attendees.find(attendee => attendee.email === person.email)

        if (this._attendees.length === this._capacity) {
            console.log("Sorry! The conference has reached the maximum registrants.")
            return false
        } else if (!personWithThisEmail && !this._attendees.includes(person)) {
            this._attendees.push(person)
            console.log(`${person.fullName}, your resgistration is successful!`)
            return true
        } else if (personWithThisEmail) {
            console.log(`This email (${person.email}) is already registered!`)
            return false
        } 
    }
    get attendeeNumber() {
        return this._attendees.length
    }
    get allAttendees() {
        return this._attendees
    }
    addSession(session) {
        let foundFacEmail =  this._attendees.find( att => {
            return att.email === session.facilitator.email
        })
        let overlap = this.checkOverlap(this._sessions, session)

        if (!foundFacEmail) {
            console.log("The faciliator with unfouded email.")
            return false
        } else if (overlap) {
            console.log("Please check your session time, it is overlap!")
            return false
        } else {
            this._sessions.push(session)
            console.log("Add a session sucessfully!")
            return true
        }        
    }
    get sessionsSize() {
        return this._sessions.length
    }
    summary() {
        let summary = ""
        if (this._attendees.length === 0) {
            summary += 'There is no registrants at this moment.'
        } else {        
            summary = `Welcome to ${this._name}! We are exited to welcome ${this._attendees.length} of you to join us!\n`
            this._attendees.forEach(attendee => summary += `Welcome, ${attendee.fullName}!\n`)

            summary += this.printSession()

            if (this.hasSeatAvail()) {
                summary += "The registration is still open. Please come and join us!"
            } else {
                summary += "The registration is closed."
            }
        }
        return summary
    }
    hasSeatAvail() {
        return (this._attendees.length < this._capacity)
    }
    printSession() {
        if (this._sessions.length === 0) {
            return "There is no session at this moment!\n"
        }   
        else if (this._sessions.length === 1) {
            let sessionInfo = `We have ${this._sessions.length} sessions, which is: `
            this._sessions.forEach(session => sessionInfo += `${session.title} from ${session.startTime} to ${session.endTime}, facilate by ${session.facilitator.fullName}\n`)
            return sessionInfo
        } else {
            this._sessions = this.sort(this._sessions)
            let sessionInfo = `We have ${this._sessions.length} sessions, which are:\n`
            this._sessions.forEach(session => sessionInfo += `+ ${session.title} from ${session.startTime} to ${session.endTime} PST, facilate by ${session.facilitator.fullName}\n`)
            return sessionInfo
        }        
    }
    sort(array) {
        for (let i=1; i<array.length; i++) {
            if (array[i-1].startTime > array[i].startTime) {
                let tmp = array[i-1]
                array[i-1] = array[i]
                array[i] = tmp
            }
        }
        return array        
    }
    checkOverlap(array, session) {  
        if( array.length === 1)  return null    
        let found = array.find( ses => {
            if ( (session.startTime < ses.startTime &&  ses.startTime < session.endTime ) 
                    || (session.startTime < ses.endTime && ses.endTime < session.endTime)) {
                        return ses
                    }
        })        
        return found
    }    
}

export default Conference