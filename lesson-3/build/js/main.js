"use strict";
let stringArray = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Pauk', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'John';
//stringArray.push(42)            Não funciona pq é um array de string
stringArray.push('João');
guitars[0] = 1984;
//guitars.unshift(true)         Só tinha numeros e strings
guitars.unshift('Jim');
//stringArray = guitars
guitars = stringArray;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
//bands.push(true);
//Tuple
//O tuple é diferente pq precisa ser o exato tipo na exata posição, ja os arrays com
// Union type, podem receber qualquer um dos tipos especificados em qualquer ordem
// unionType: (string, number, boolean) = [];
// tuple: [string, number, boolean] = [];
let myTuple = ['dave', 42, true];
let mixed = ['john', 1, false];
mixed = myTuple;
//myTuple[3] = 13
//myTuple[2] = 13
myTuple[1] = 13;
let myObj;
myObj = [];
console.log(myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Save',
    prop2: true,
};
//exampleObj.prop2 = 42 
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albuns: [1984, 5150, 'OU812']
};
let jp = {
    active: true,
    albuns: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello Gabriel';
};
console.log(greetGuitarist(jp));
//Enums
// "Unline most TypeScript features, Enums are not a type-leves addition 
//    to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
