class Article {
    constructor(name, body) {
        this.name = name
        this.body = body
        this.comments = []
    }
    submittable(comment) { 
        if (!comment) {
            return false
        } else {
            this.comments.push(comment)
            return true
        }
    }
}

export default Article