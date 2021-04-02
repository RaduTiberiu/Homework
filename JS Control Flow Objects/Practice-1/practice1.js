// ---Average---

console.log('--- Average ---');

const array = [27, 48, 81, 5, 95, 74];
var sum = 0;

for(var i = 0; i < array.length; i++) {
    sum += array[i];
}

let avg = sum/array.length;

console.log(avg);

// ---Sum of numbers---

console.log(' ');
console.log(`--- Sum of numbers ---`);

const array2 = [47, true, 93, false, {color: "blue", type: "sedan"}, 17, 'string', null, undefined];

var sum = 0;
for(var i2 = 0; i2 < array2.length; i2++) {
    if (typeof(array2[i2]) === "number") {
        sum += array2[i2];
    }
}
console.log(sum);

//Fibonacci sequence

console.log(' ');
console.log('--- Fibonacci sequence ---')

let num1 = 0, num2 = 1, nextNum;

for(var i3 = 0; i3 <= 20; i3++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}