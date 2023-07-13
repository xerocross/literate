# @xerocross/literate

This is an NPM package I wrote for my own personal use, but you may also find it useful. You can install it as `npm install @xerocross/literate`.

## Usage

### noteAnd

Literate offers the following functions that take a description and a function to be executed.

They all take the form 

```
const noteAnd = (description:string, code:() => any) => {
    if (isVerbose) {
        console.log(description);
    }
    return code();
};
```

The following functions are all aliases of noteAnd: `letUs`, `soWe`, `since`.

Example: 

```
letUs("do something explained here", () => {
    // code to do something
});
```

Note that `noteAnd` itself is not an exported function. It is a template.


### noteAndMaybe

Also available are function with the template

```
const noteAndMaybe = (description:string, code?:() => any) => {
    if (isVerbose) {
        console.log(description);
    }
    if (code) {
        return code();
    }
};
```

The available aliases for this template are: `so`, `itFollowsThat`, `weKnowThat`, `whichImpliesThat`, `therefore`, `noteThat`, and `thus`.

### check

We also have literate boolean test functions of the form check, as in the following

```
const check = (description:string, statement:boolean) => (statement);
```

In this case, `check` is an exported function.

Other aliases for are `weHave` and `weHaveThat`.

### setVerbose

Literate also exports the function `setVerbose([boolean])`. Its default value is false. If you set `setVerbose(true)` then the descriptions of the functions of Literate will be logged to the console.

