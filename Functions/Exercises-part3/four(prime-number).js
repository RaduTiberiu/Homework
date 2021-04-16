// if number % otherNumber !== 0 && otherNumber !== number && othernumber !==1
function isPrime(number) {
    for(i = 2; i < number; i++) {
        if(number % i === 0) {
            return `${number} is NOT a prime number.`;
        }
        return `${number} is a prime number.`;
    }
}

console.log(isPrime(17));
console.log(isPrime(8));
console.log(isPrime(11));
console.log(isPrime(22));