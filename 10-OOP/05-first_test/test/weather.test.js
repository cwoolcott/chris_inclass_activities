const weatherCheck = require("../weather");

describe("Weather Test degrees and strings", () => {

    describe("Test Degrees", ()=>{
        it("Should Take a number under 32 and see freezing", () => {
            const degrees = 21;
            const string = "It's Freezing Out";
            expect(weatherCheck(degrees)).toBe(string)
        });
        it("Should Take a number under 11 and see freezing", () => {
            const degrees = 10;
            const string = "It's Freezing Out";
            const answer = weatherCheck(degrees)==="It's Freezing Out";
            expect(answer).toBeTruthy;
        });
        it("Should Take a number over 61 and see nice out", () => {
            expect(weatherCheck(76)).toBe("Nice Out!")
        });
    })

    describe("Test Strings", ()=>{
        it("Should Take a string freezing and return 32", () => {
            expect(weatherCheck("freezing")).toBe(32)
        });
    })

})
describe("Weather Test Exceptions!", () => {
    describe("Failing Test", ()=>{
        it("Should should throw an Error", () => {
            const cb = () => weatherCheck();
            const err = new Error("Temp must be a digit or a String");
            expect(cb).toThrowError(err);
        });
        
    })
})
