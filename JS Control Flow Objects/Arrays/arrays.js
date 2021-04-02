var array = ['string', 5, true, undefined, null];

for (let i = 0; i < array.length; i++) {
    console.log(typeof array[i]);
}

const array2 = [27, 48, 81, 5, 95, 74];

let min = array2[0];
for (let i2 = 1; i2 < array2.length; i2++) {
    if (min > array2[i2]) {
        min = array2[i2];
    }
}
console.log(min);