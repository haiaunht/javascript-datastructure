import { iteratee } from 'lodash'
import Conference from '../../Conference.js'
import Person from '../../Person.js'
import Session from '../../Session.js'

describe("testing in Conference", () => {
    let session
    let pat
    let heidi
    let mel
    let haiau
    let systemCheck

    beforeEach(() => {
        pat = new Person("Pat", "Whelan", "pat@launch.com")
        heidi = new Person("Heidi", "Hood", "heidi@launch.com")
        mel = new Person("Mel", "Hood", "heidi@launch.com")
        haiau = new Person("Hai-Au", "Bui", "haiau@yahoo.com")
        session = new Session("WTIA", pat, 9, 12)
        systemCheck = new Conference("Review", 2)
    }) 

    it("#sumary", () => {
        expect(systemCheck.summary()).toEqual("There is no registrants at this moment.")
    })

    it("capacity", () => {
        expect(systemCheck._capacity).toEqual(2)
    })    

    it("cannot add pat's session since Pat is not register", () => {
        expect(systemCheck.addSession(pat)).toEqual(false)            
    })

    it("Pat is now register", () => {
        expect(systemCheck.register(pat)).toEqual(true)            
    })

    // cannnot call addSession here because inside the it block does not know if register(pat) above
    // it("now can add Pat's session", () => {
    //     expect(systemCheck.addSession(pat)).toEqual(true)            
    // })

    describe("#register" , () => {
        it("registration for heidi is succesful", () => {
            expect(systemCheck.register(heidi)).toEqual(true)            
        }) 

        it("Cannot register for the third person since > capacity", () => {
            expect(systemCheck.register(pat)).toEqual(true)
            expect(systemCheck.register(heidi)).toEqual(true)
            expect(systemCheck.register(haiau)).toEqual(false)
            expect(systemCheck.allAttendees).toContain(heidi)            
        })

        it("mel has the same email, cannot add someone has the same email", () => {
            expect(systemCheck.register(heidi)).toEqual(true) 
            expect(systemCheck.register(mel)).toEqual(false)            
        })
    })

    describe("#addSession", () => {
        it("Pat is not register, cannot add his session", () => {            
            expect(systemCheck.addSession(session)).toEqual(false)
            expect(systemCheck.attendeeNumber).toEqual(0)
            expect(systemCheck.sessionsSize).toEqual(0)
            expect(systemCheck.summary()).toEqual('There is no registrants at this moment.')
        })
    
        it("Register for Pat is succesful, can add session now", () => {
            expect(systemCheck.register(pat)).toEqual(true)
            expect(systemCheck.attendeeNumber).toEqual(1)
            systemCheck.addSession(session)
            expect(systemCheck.sessionsSize).toEqual(1)
        })
    })

    describe("#summary", () => {
        it("Register for Pat, add session, output", () => {
            expect(systemCheck.register(pat)).toEqual(true)
            expect(systemCheck.attendeeNumber).toEqual(1)
            systemCheck.addSession(session)
            expect(systemCheck.sessionsSize).toEqual(1)
            expect(systemCheck.summary()).toEqual("Welcome to Review! We are exited to welcome 1 of you to join us!\nWelcome, Pat Whelan!\nWe have 1 sessions, which is: WTIA from 9 to 12, facilate by Pat Whelan\nThe registration is still open. Please come and join us!")
        })
    })
})