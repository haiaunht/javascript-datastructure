class ShowTime {
    constructor(theater, time, movie) {
        this.theater = theater
        this.time = time
        this.movie = movie
    }    
    printShow() {
        console.log(`${this.movie.title} is showing at theater ${this.theater.name} at ${this.time}.`)
    }
}

export default ShowTime

