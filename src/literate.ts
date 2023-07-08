const noteAnd = (description:string, code:() => any) => {
    return code();
};
const letUs = noteAnd;
const soWe = noteAnd;
const since = noteAnd;

const noteAndMaybe = (description:string, code?:() => any) => {
    if (code) {
        return code();
    }
};
const so = noteAndMaybe;
const itFollowsThat = noteAndMaybe;
const weKnowThat = noteAndMaybe;
const whichImpliesThat = noteAndMaybe;
const therefore = noteAndMaybe;
const noteThat = noteAndMaybe;
const given = (message: string, statement : boolean) => {
    let result = statement;
    const and = (message: string, s2:boolean) => {
        result = result && s2;
        return and;
    };
    const then = (code: () => any) => {
        if (result) {
            code();
        }
    };
    and.then = then;
    and.and = and;
    return {
        and : and,
        then : then
    };
};
const check = (description:string, statement:boolean) => (statement);
const weHave = check;
const weHaveThat = check;
export { letUs, itFollowsThat, therefore, since, given, weKnowThat, check, soWe, weHave, whichImpliesThat, so, weHaveThat, noteThat};