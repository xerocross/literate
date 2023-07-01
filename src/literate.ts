const letUs = (description:string, code:() => any) => {
    return code();
};
const soWe = letUs;
const since = letUs;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const weKnowThat = (description:string) => {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const whichImpliesThat = weKnowThat;
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
export { letUs, since, given, weKnowThat, check, soWe, weHave, whichImpliesThat };