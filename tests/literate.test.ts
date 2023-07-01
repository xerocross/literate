import { letUs, given } from "../src/literate";

it("runs code in the code function", () => {
    let codeRan = false;
    letUs("some code that does something", () => {
        codeRan = true;
    });
    expect(codeRan).toBeTruthy();
});
describe("given", () => {
    it("tests given one boolean true", (done) => {
        given("true", true).then(() => {
            expect(true).toBeTruthy();
            done();
        });
    });
    it("tests given one boolean false", () => {
        let test = false;
        given("false", false).then(() => {
            test = true;
        });
        expect(test).toBeFalsy();
    });
    it("handles multiples false and false", () => {
        let test = false;
        given("false", false).and("false", false).then(() => {
            test = true;
        });
        expect(test).toBeFalsy();
    });
    it("handles multiples false and true", () => {
        let test = false;
        given("false", false).and("true", true).then(() => {
            test = true;
        });
        expect(test).toBeFalsy();
    });
    it("handles multiples true and false", () => {
        let test = false;
        given("true", true).and("false", false).then(() => {
            test = true;
        });
        expect(test).toBeFalsy();
    });
    it("handles multiples true and true", () => {
        let test = false;
        given("true", true).and("true", true).then(() => {
            test = true;
        });
        expect(test).toBeTruthy();
    });
    describe("triple", () => {
        it("handles true true true -> true", () => {
            let test = false;
            given("true", true).and("true", true).and("true", true).then(() => {
                test = true;
            });
            expect(test).toBeTruthy();
        });
        it("handles false true true -> true", () => {
            let test = false;
            given("false", false).and("true", true).and("true", true).then(() => {
                test = true;
            });
            expect(test).toBeFalsy();
        });
        it("handles true true false -> true", () => {
            let test = false;
            given("true", true).and("true", true).and("false", false).then(() => {
                test = true;
            });
            expect(test).toBeFalsy();
        });
        it("handles true false true -> true", () => {
            let test = false;
            given("true", true).and("false", false).and("true", true).then(() => {
                test = true;
            });
            expect(test).toBeFalsy();
        });
    });
});