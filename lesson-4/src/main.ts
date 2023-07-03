type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string,
  active: boolean,
  albuns: stringOrNumberArray,
}

type userId = stringOrNumber;


//interface postId = stringOrNumber;




          //Literal Types

let meuNome: 'Dave'

let userNome: 'Dave' | 'John' | 'Amy'
userNome = 'Amy' 
//userNome = 'Rachel' 

/* userNome += ' Rachel'                                  THIS WORK
console.log(userNome) */






          //Function


const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))
//logMsg(add('a', 3))


let subtract = function (c: number, d: number): number {
  return c - d
}



type mathFunction = (a: number, b: number) => number;
/* interface mathFunction {
 (a: number, b: number): number
} */


let multiply: mathFunction = function (c, d) {
  return c * d
}


logMsg(multiply(2, 7))






        //Optional Parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c
  } 
  return a + b
}


        //Default Parameter

const sumAll = (a: number = 100, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3, 8))
logMsg(sumAll(undefined, 3))



        //Rest Parameters


const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(10, 2, 3))


const createError = (errMsg: string) => {
  throw new Error(errMsg)
}


const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break         //Se não usar o brak, a função retorna um never type
  }                            //Never Types são usados para erros
}



const isNumber = (value: any): boolean => {
  return typeof value === 'number'
    ? true : false
}

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return 'number'
  return createError('This should never happen!')
}