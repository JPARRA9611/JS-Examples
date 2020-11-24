/*var divisible = function (mod) {
    return function (num) {
        return num % mod;
    }
}*/

const divisible = mod => num => num % mod;
console.log(divisible(10)(2))