class Coach {
    constructor(name, firstYearAsCoach) {
        this.name = name
        this.firstYearAsCoach = firstYearAsCoach
        this.stats = {
            wins: 0,
            losses: 0,
            draws: 0,
            matchesPlayed: 0
        }
    }
    gameOver(character) {
        if (character === "W") this.stats.wins++
        else if (character === "L") this.stats.losses++
        else this.stats.draws++

        this.stats.matchesPlayed++
    }

}

export default Coach