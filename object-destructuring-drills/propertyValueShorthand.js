// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PROPERTY VALUE SHORTHAND
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. Create a `browserAwesomeness` object with the below variables as keys, then
// comment in the `console.log` to see the object successfully appear in your console.
let safari = "bad"
let chromeBrowser = "good"
let firefox = "good"
let vivaldi = "awesome to the max"

let browserAwesomeness = { safari, chromeBrowser, firefox, vivaldi }
console.log(browserAwesomeness)

// 2. Create `osAwesomeness` object from these variables; within the same object declaration, also
// add a `linux` key with a value of `"rad, man"`

let macOS = "cool beans"
let windows = "well, I guess not every OS can be MacOS"

// your code, here
let osAwesomeness = { macOS, windows, linux: "rad, man" }
console.log(osAwesomeness)

// 3. Define the variables needed to create this object
let name = "Hai-Au Bui"
let age = 41
let numberOfToes = 10
let numberOfVinDieselMoviesSeen = 2

let me = { name, age, numberOfToes, numberOfVinDieselMoviesSeen, isBadassCoder: true }

console.log(me)
