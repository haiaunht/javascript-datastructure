// 1./
let numberGreaterThanZero = (number) => {
    return result = (number >= 0) ? true : false
}
console.log(numberGreaterThanZero(5))
console.log(numberGreaterThanZero(-5))

// 2./
let numberDivisbleByFive = (number) => {
    return result = (number % 5 === 0)  ? true : false
}
console.log(numberDivisbleByFive(5))
console.log(numberDivisbleByFive(71))

// 3./
let fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(fullName('Islay', 'Mae'))
console.log(fullName('Fred', 'Rogers'))

// 4./
let sumOfAllNumber = (number) => {
    let sum = 0
    for (let i = 1; i <= number; i++ ) {
        sum += i
    }
    return sum
}
console.log(sumOfAllNumber(3))


// 5./
let charFrequent = ( singleChar, compareString ) => {
    let count = 0
    compareString.split("").forEach( character => {
        if (singleChar.toLowerCase() === character.toLowerCase()) {
            count++
        }
    })
    return count
}
console.log(charFrequent('a', 'Isaly Mae'))
console.log(charFrequent('x', 'Geoffrey'))


// 6./
let sortAscending = (myArray) => {
    let newArray = myArray.sort((a, b) => {return a-b})
    return newArray
}
console.log(sortAscending([2,13,7,43,27]))


// 7./
let repeateName = (number, name) => {
    for ( let i = 0; i < number; i++ ) {
        console.log(name)
    }
}
repeateName(3, 'Mae')


// 8./
let convertMinutesToSecond = (minutes) => {
    return minutes * 60
}
console.log(convertMinutesToSecond(3))


// 9./
let firstAndLastElement = (myArray) => {
    const newArray = [myArray[0], myArray[myArray.length -1]]
    return newArray
}
console.log(firstAndLastElement(["duck", "duck", "quail", "goose"]))
console.log(firstAndLastElement([2, 4, 6, 8, 10]));

// 10./Create your own function challenge! Based on the problems above, create a new challenge and submit 2 potential solutions.
// function verify if a year is a leap year
// version one, nested if/else
let leapYear = (year) => {
    if (year % 4 === 0) {
        if ( year % 100 == 0 ) {
            if ( year % 400 === 0 ) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }

    } else {
        return false
    }
}
console.log(leapYear(1992))
console.log(leapYear(1900))

// version 2
let leapYearOpt = (year) => {
    if ( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
        return true
    } else if ( year % 100 === 0) {
        return false
    }
}
console.log(leapYearOpt(1992))
console.log(leapYearOpt(1900))