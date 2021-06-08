import Person from './Person.js'
import Conference from './Conference.js'
import Session from './Session.js'
import Programmer from './Programmer.js'

let au = new Person("Hai-Au", "Bui", "@yahoo")
let bri = new Person("Briana", "Smith", "to@yahoo")
let tom = new Person("Tom", "Abott", "toa@yahoo")

let conf = new Conference("WTIA", 4)
console.log(conf.register(au))
console.log(conf.register(bri))
console.log(conf.register(tom))
console.log()

let session1 = new Session("Women in Tech", au, 9, 12)
let session2 = new Session("Apprenti", bri, 14, 17)
let session3 = new Session("TEALs", tom, 12, 15)

conf.addSession(session2)
conf.addSession(session1)
conf.addSession(session3)
console.log()

console.log(conf.summary())

console.log("\n================\n")
let me = new Programmer("Au", "Bui", "@.com", "JavaScript")
console.log(me.writeCode())