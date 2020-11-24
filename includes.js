const pets = null;//['cat', 'dog', 'bat'];
const stringTest = undefined;


const exist = (pets || []).includes('cat')
console.log(exist)

const existString = String(stringTest).includes('de')
console.log(existString)

const numberTest = null || 0;
//console.log(Number(numberTest).toFixed(1))
console.log((numberTest).toFixed(1))
