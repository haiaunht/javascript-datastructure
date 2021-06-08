import Coach from './Coach.js'
import Player from './Player.js'
import Team from './Team.js'

let drogba = new Player(
  'Didier Drogba',
  11,
  'Striker'
)
let alonso = new Player(
  'Marcos Alonso',
  3,
  'Left back',
)
let messi = new Player(
  'Lionel Messi',
  10,
  'Forward',
)
let ronaldo = new Player(
  'Cristiano Ronaldo',
  7,
  'Forward',
)

let chelsea = new Team("Chelsea", "Frank Lampard")
chelsea.signPlayer(drogba)
chelsea.signPlayer(alonso)
let barcelona = new Team("Barcelona", "Quique Setién")
barcelona.signPlayer(messi)
let juventus = new Team("Juventus", "Maurizio Sarri")
juventus.signPlayer(ronaldo)

console.log(chelsea)
console.log(barcelona)
console.log(juventus)

drogba.score()
drogba.score()
drogba.assist()
alonso.score()
messi.assist()
messi.score()
ronaldo.assist()
ronaldo.redCard()

console.log("Drogba's stats:")
console.log(drogba.stats)
console.log("Alonso's stats:")
console.log(alonso.stats)
console.log("Messi's stats:")
console.log(messi.stats)
console.log("Ronaldo's stats:")
console.log(ronaldo.stats)

let frank = new Coach("Frank Lampard", 2019)
frank.gameOver("W")
let quique = new Coach("Barcelona", 2020 )
quique.gameOver("L")
let maurizio = new Coach("Juventus", 2019)
maurizio.gameOver("D")
console.log(frank)
console.log(quique)
console.log(maurizio)

