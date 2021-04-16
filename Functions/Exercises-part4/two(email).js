//am considerat ca un string care contine '@' este o adresa de mail valida

function checkString(email) {
    for (i = 0; i < email.length; i++) {
        if(email.charAt(i) === '@') return "Adresa de mail valida";
    }
    return "Adresa de mail invalida";
}

console.log(checkString('testmail.com'));
console.log(checkString('test@mail.com'));
