function checkString(characters) {
    var specialChars = "*|,\":<>[]{}`\';()@&$#%";
    if (characters.length < 8) return ('Minimum string length is 8 characters.');
    for (i = 0; i < characters.length; i++) {
        if (specialChars.indexOf(characters.charAt(i)) !== -1){
            return ('The string that you entered is ok.');
        }
    }
    return 'At least one character has to be a special character';
}

console.log(checkString('string'));
console.log(checkString('a string that is more than 8 characters long'));
console.log(checkString('this has more than 8 characters and special ones :)'));
