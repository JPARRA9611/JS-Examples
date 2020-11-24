const myMap = new Map();

myMap.set('Primero','1');
myMap.set('Segundo','2');
myMap.set('Tercero','3');
myMap.set('Cuarto','4');
console.log(myMap);
console.log(myMap.size,'Size');
myMap.forEach(logMapElements);
console.log(myMap.has('Primero'),'has primero')
myMap.delete('Primero')
console.log(myMap.has('Primero'),'has primero')
console.log(myMap.get('Segundo'),'Get segundo')
myMap.clear();
console.log(myMap.size,'Size');

function logMapElements(value, key) {
    console.log(`[${key}] = ${value}`);
}