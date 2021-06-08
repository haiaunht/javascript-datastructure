let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Can't predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log(responses.length)

// Ask the user what their question is, and store it as a variable called `question`
let question = prompt("What is your question?")

// Output a random response to the user's question
let randomIndex = () => {
  return Math.floor(Math.random() * responses.length)
}
console.log(responses[randomIndex()])

// Output the number of responses that include the word "yes"
let yesResponses = (findYesResponse) => {
  if (findYesResponse.toLowerCase().includes("yes")) {
    return findYesResponse
  }
}
let yesResult = responses.filter(yesResponses)
console.log(yesResult.length)

// Output the number of responses that include the words "no" or "not"
let noResponses = (findNoResponse) => {
  if (findNoResponse.toLowerCase().split(" ").includes("not") || findNoResponse.toLowerCase().split(" ").includes("no")) {
    return findNoResponse
  }
}
let noResult = responses.filter(noResponses)
console.log(noResult.length)

// Output the alphabetized list of responses
console.log(responses.sort())

// Output the first and last responses from the alphabetized list
console.log(responses[0])
console.log(responses[responses.length-1])

// Delete two of the negative responses
responses.splice(responses.indexOf(noResult[0]), 1)
responses.splice(responses.indexOf(noResult[noResult.length-1]), 1)

// Reassign 'Ask again later' to the beginning of the array
let reAssignElement = responses.indexOf("Ask again later")
let removeTarget = responses.splice(reAssignElement, 1)
responses.unshift(removeTarget[0])
console.log(responses)

// Add 1 response of your choosing to the current list
responses.push("Absolutely!")

// Concat an **array** of 3 additional responses to the current list
let threeMoreResponese = ["Right answer!", "You got it!", "Perfect!"]
responses = responses.concat(threeMoreResponese)
console.log(responses)

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log(responses.length)
