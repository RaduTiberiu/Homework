const isPalindrome = (num) => {
    let factor = 1;
    while (num / factor >= 10) {
        factor *= 10;
    }
while (num) {
    let falseResponse = `The number you entered is not a palindrome.`;
    let first = Math.floor(num / factor);
    let last = num % 10;
    if (first != last) {
        return falseResponse;
    }
    num = Math.floor((num % factor) / 10);
    factor = factor / 100;
    }
    let trueResponse = `The number you entered is a palindrome`;
    return trueResponse;
};

console.log(isPalindrome(121));
console.log(isPalindrome(1234));
console.log(isPalindrome(123456787654321));