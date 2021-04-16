function vowelCount(words) {
    let count = 0;
    for (i = 0; i < words.length; i++) {
        if (words[i] === 'a' 
        || words[i] === 'e' 
        || words[i] === 'i' 
        || words[i] === 'o' 
        || words[i] === 'u') {
            count += 1;
        }
    }
    return count;
}

let sentenceToCount = 'Please count the vowels in this sentence.';

console.log(`The number of vowels in your sentence is ${vowelCount(sentenceToCount)}.`);