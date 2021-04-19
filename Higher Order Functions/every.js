const isNumber = (value) => !isNaN(value);

const array1 = [27, 845, 13, 75, 93, 48, 50];
const array2 = ['string', 47, 17, 3, 'definitelynotanum', 57, 900];

if(array1.every(isNumber)) {
    console.log('Every element in array1 is a number.');
} else {
    console.log('Not all elements in array1 are numbers.')
};

if(array2.every(isNumber)) {
    console.log('Every element in array2 is a number.');
} else {
    console.log('Not all elements in array2 are numbers.')
};