import Article from '../Article.js'

describe("Testing Article class", () => {
    let article    

    beforeEach(() => {
        article = new Article("SystemCheck for Test", "This Test is hard")
    })

    it("name should be SystemCheck for Test", () => {
        expect(article.name).toEqual("SystemCheck for Test")
    })

    it("body should be his Test is hard", () => {
        expect(article.body).toEqual("This Test is hard")
    })

    it("#submittable did not pass any comment, should return false", () => {
        expect(article.submittable()).toEqual(false)
    })
})