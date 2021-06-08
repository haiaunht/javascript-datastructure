class Video {
    constructor(name, body, url) {
        this.name = name
        this.body = body
        this.url = url
        this.videos = []
    }
    submittable(video) {
        if ( !video ) {
            return false
        } else {
            this.videos.push(video)
            return true
        }
    }
}

export default Video