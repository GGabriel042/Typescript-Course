"use strict";
//interface postId = stringOrNumber;
//Literal Types
let meuNome;
let userNome;
userNome = 'Amy';
//userNome = 'Rachel' 
/* userNome += ' Rachel'                                  THIS WORK
console.log(userNome) */
//Function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
//logMsg(add('a', 3))
let subtract = function (c, d) {
    return c - d;
};
/* interface mathFunction {
 (a: number, b: number): number
} */
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 7));
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Default Parameter
const sumAll = (a = 100, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 8));
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; //Se não usar o brak, a função retorna um never type
    } //Never Types são usados para erros
};
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
