import {letUs, since, given, weKnowThat, check, soWe, weHave, whichImpliesThat, so, weHaveThat, noteThat } from "../src/literate";
describe("check", () => {
    it("evaluates true on true", () => {
        expect(check("true", true)).toBeTruthy();
    });
    it("evaluates false on false", () => {
        expect(check("false", false)).toBeFalsy();
    });
});
describe("weHave", () => {
    it("evaluates true on true", () => {
        expect(weHave("true", true)).toBeTruthy();
    });
    it("evaluates false on false", () => {
        expect(weHave("false", false)).toBeFalsy();
    });
});
describe("weHaveThat", () => {
    it("evaluates true on true", () => {
        expect(weHaveThat("true", true)).toBeTruthy();
    });
    it("evaluates false on false", () => {
        expect(weHaveThat("false", false)).toBeFalsy();
    });
});
describe("letUs", () => {
    it("runs code in the code function", () => {
        let codeRan = false;
        letUs("some code that does something", () => {
            codeRan = true;
        });
        expect(codeRan).toBeTruthy();
    });
});
describe("soWe", () => {
    it("runs code in the code function", () => {
        let codeRan = false;
        soWe("some code that does something", () => {
            codeRan = true;
        });
        expect(codeRan).toBeTruthy();
    });
});
describe("so", () => {
    it("runs code in the code function", () => {
        let codeRan = false;
        so("some code that does something", () => {
            codeRan = true;
        });
        expect(codeRan).toBeTruthy();
    });
});
describe("since", () => {
    it("runs code in the code function", () => {
        let codeRan = false;
        since("some code that does something", () => {
            codeRan = true;
        });
        expect(codeRan).toBeTruthy();
    });
});
describe("weKnowThat", () => {
    it("runs code if the code function is passed", () => {
        let codeRan = false;
        weKnowThat("some code that does something", () => {
            codeRan = true;
        });
        expect(codeRan).toBeTruthy();
    });
    it("runs if no code function is passed", () => {
        expect(() => {
            weKnowThat("some code that does something");
        }).not.toThrow();
    });
});
describe("noteThat", () => {
    it("runs code if the code function is passed", () => {
        let codeRan = false;
        noteThat("some code that does something", () => {
            codeRan = true;
        });
        expect(codeRan).toBeTruthy();
    });
    it("runs if no code function is passed", () => {
        expect(() => {
            noteThat("some code that does something");
        }).not.toThrow();
    });
});
describe("whichImpliesThat", () => {
    it("runs code if the code function is passed", () => {
        let codeRan = false;
        whichImpliesThat("some code that does something", () => {
            codeRan = true;
        });
        expect(codeRan).toBeTruthy();
    });
    it("runs if no code function is passed", () => {
        expect(() => {
            whichImpliesThat("some code that does something");
        }).not.toThrow();
    });
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