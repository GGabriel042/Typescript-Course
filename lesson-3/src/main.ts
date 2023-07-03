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
let bands: string[] = [];
bands.push('Van Halen');
//bands.push(true);



            //Tuple
            

    //O tuple é diferente pq precisa ser o exato tipo na exata posição, ja os arrays com
    // Union type, podem receber qualquer um dos tipos especificados em qualquer ordem
    // unionType: (string, number, boolean) = [];
    // tuple: [string, number, boolean] = [];


let myTuple: [string, number, boolean] = ['dave', 42, true];

let mixed = ['john', 1, false];

mixed = myTuple

//myTuple[3] = 13
//myTuple[2] = 13
myTuple[1] = 13




let myObj: object
myObj = []
console.log(myObj)
myObj = bands
myObj = {}



const exampleObj = {
  prop1: 'Save',
  prop2: true,
}

//exampleObj.prop2 = 42 
exampleObj.prop2 = false 


interface Guitarist {
  name?: string,                      //   ?: coloca undefined como opção de tipo
  active: boolean,
  albuns: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albuns: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  active: true,
  albuns: ['I', 'II', 'IV']
}


const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`
  }
  return 'Hello Gabriel';
}

console.log(greetGuitarist(jp));







            //Enums
// "Unline most TypeScript features, Enums are not a type-leves addition 
//    to JavaScript but something added to the language and runtime."


enum Grade {
    U = 1,
    D = 3,
    C,
    B,
    A,
}

console.log(Grade.U);