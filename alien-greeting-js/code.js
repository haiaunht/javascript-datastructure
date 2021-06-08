let alienName = ""
let language = ""
let english = ["Hi", "Yo", "Hey", "Howdy"]
//let foreign = ["english", "spanish", "italian", "irken"]
let foreignGreeting = ["Hola", "Ciao", "DOOM de dom"]

do {
    alienName = prompt("What is your name?")
} while (!alienName)

language = prompt("What is your language?")
if (language.toLowerCase() === "spanish" ) {
    greet (alienName, foreignGreeting[0]) 
} else if (language.toLowerCase() === "italian" ) {
    greet (alienName, foreignGreeting[1]) 
} else if ( language.toLowerCase() === "irken") {
    greet (alienName, foreignGreeting[2]) 
} else {
    greet ( alienName, english[ Math.floor(Math.random() * english.length) ] ) 
}

function greet (name , language) {
    name = name.toUpperCase()
    console.log( `${language} ${name}!` )
}
