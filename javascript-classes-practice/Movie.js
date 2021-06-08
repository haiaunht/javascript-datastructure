class Movie {
    constructor(title, genre, duration, rating, cast) {
        this.title = title
        this.genre = genre
        this.duration = duration  
        this.rating = rating      
        this.cast = cast || []
    }
    set movieCast(cast) {
        this.cast.push(cast)
    }
    get movieTitle() {
        return this.title
    }
    get movieGenre() {
        return this.genre
    }    
    get movieDuration() {
        return this.duration
    }
    get movieRating() {
        return this.rating
    }
    get movieCast() {
        return this.cast
    }
}

export default Movie