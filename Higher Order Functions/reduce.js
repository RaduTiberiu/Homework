const array1 = [10, 100, 1000];
const array2 = [27, 85, 29, 75, 3];
const array3 = [5, 57, 83, 10, 39, 55];

const reducer = (accumulator, value) => accumulator + value;

console.log(array1.reduce(reducer));
console.log(array2.reduce(reducer));
console.log(array2.reduce(reducer));