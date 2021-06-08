let printPuzzle = (word, hints = []) => {
    let resultString = []
    
    for ( let i = 0; i < word.length; i++ ) {        
        if (hints.includes(word[i])){
            resultString[i] = word[i]
        } else {
            resultString[i] = ' _ '
        }
        
    }
    console.log(resultString.join(" "))
}

printPuzzle('perimeter')
printPuzzle('triangle', ['t' , 's' , 'g'])

