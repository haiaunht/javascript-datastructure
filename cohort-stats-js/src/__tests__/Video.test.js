import Video from '../Video.js'

describe("Testing Video class", () => {
    let video    

    beforeEach(() => {
        video = new Video("Review clinic week 3", "This system check is super hard", "https://learn.launchacademy.com/")
    })

    it("name should be SystemCheck for Test", () => {
        expect(video.name).toEqual("Review clinic week 3")
    })

    it("body should be This system check is super hard", () => {
        expect(video.body).toEqual("This system check is super hard")
    })

    it("url should be 'https://learn.launchacademy.com/'", () => {
        expect(video.url).toEqual("https://learn.launchacademy.com/")
    })

    it("#submittable did not pass any comment, should return false", () => {
        expect(video.submittable()).toEqual(false)
    })
})