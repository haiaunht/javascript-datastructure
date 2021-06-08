let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"]

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"]
]

//List all the teachers with an even index number (including 0)
//or this
let teachersEvenIndex = teachers.filter((index) => {
  return index % 2 === 0
})
console.log(teachersEvenIndex)

let evenIndex = () => {
  teachers.forEach( teacher => {
    if( teachers.indexOf(teacher) % 2 === 0) {
      console.log( teacher )
    }
  })
}
evenIndex() 

//List all of the teachers with the letter i in their name
//or this
let teachersWithI = teachers.filter( (teacher => {
  return teacher.includes("i")
}))
console.log( teachersWithI )
console.log( teachersWithI.join(", "))

// ???? TO IMPROVE AS ABOVE
let iInName = () => {
  teachers.forEach( teacher => {
    if( teacher.includes("i") ) {
      console.log( teacher )
    }
  })
}

iInName()

//Return the number of teachers

let teacherCount = () => {
  return teachers.length
}

console.log(teacherCount())

//Return the number of rooms of students

let roomCount = () => {
  return rooms.length
}

console.log(roomCount())

//Return the number of students in all the rooms

let studentCount = () => {
  let total = 0
  rooms.forEach( (room) => { total += room.length } )
  return total
}

console.log(studentCount())
// !!! second way to do the sum, Heidi
// let studentCounts = rooms.map((room => {
//   return room.length
// }))
// let sum = studentCounts.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })


//Return the students who have an i in their names

let whichStudents = () => {
  let studentWithLetterI = []
  rooms.forEach( (room) => {
    room.forEach( (student) => {
      if ( student.toLocaleLowerCase().includes("i") ) {
        studentWithLetterI.push( student )
      }      
    })
  })
  return studentWithLetterI
}
// !!!! DIFFERENT WAY BY HEIDI
let allStudents = rooms.reduce((accummulator, currentValue) => {
  return accummulator.concat( currentValue )
})
let studentWithI = allStudents.filter((student => {
  return student.toLowerCase().includes("i")
}))

console.log(`The students who have an 'i' in their name are  ${whichStudents()}.`)

//Return the teacher who has the given student in their room

let whichTeacher = (student) => {
  let teacher = ""
  rooms.forEach( (room) => {
    room.forEach( (each) => {
      if ( each === student ) {
        teacher = teachers[ rooms.indexOf(room) ]
      }
    })
  })
  return teacher
}

console.log(`The teacher who has Jorge is ${whichTeacher("Jorge")}.`)
console.log(`The teacher who has Alexa is ${whichTeacher("Alexa")}.`)
 
// !!! Different way FROM HEIDI
let student = 'Jorge'
let teacher 
rooms.forEach( (room,index) => {
  if ( room.includes(student)) {
    teacher = teachers[index]
  }
})
console.log(teacher)