
import Person from '../../Person.js'

describe("A person", () => {
    let person 

    beforeEach(() => {
        person = new Person("Hai-Au", "Bui", "haiau@yahoo.com")
    })

    it("Full name should be Hai-Au Bui", () => {
        expect(person.fullName).toEqual("Hai-Au Bui")
    })

    it("email is haiau@yahoo", () => {
        expect(person.email).toBe("haiau@yahoo.com")
    })

    it('there is a ".com" in emai', () => {
        expect(person.email).toMatch(/.com/);
    });

    test('there is no I in team, there is I in my name if I uppercase', () => {
        expect('team').not.toMatch(/I/);
        expect(person.fullName.toUpperCase()).toMatch(/AU/)
    });
})
