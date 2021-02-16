'use strict'

// Каким будет результат этих выражений?

console.log('5 > 4', 5 > 4); // true
console.log('10 >= "7"', 10 >= "7"); // true
console.log('"2" > "12"', "2" > "12"); // true
console.log('"2" < "12"', "2" < "12"); // false
console.log('"4" == 4', "4" == 4); // true
console.log('"6" === 6', "6" === 6); // false
console.log('"false" === false', "false" === false); // false
console.log('1 == true', 1 == true); // true
console.log('1 === true', 1 === true); // false
console.log('"0" == false', "0" == false); // true
console.log('"0" === false', "0" === false); // false
console.log('"Ёнанас" < "ёжик"', "Ёнанас" < "ёжик"); // false
console.log('"Ёнанас" === "ёжик"', "Ёнанас" === "ёжик"); // false
console.log('undefined == null', undefined == null); // true - при приведении типов null становится undefined
console.log('undefined === null', undefined === null); // false