function checkUser(email, lastName, firstName, password) {

    let specialChars = "*|,\":<>[]{}`\';()@&$#%";
    let passLengthValue = true;
    let passCharValue = false;
    let emailValue = true;
    let firstNameValue = true;
    let lastNameValue = true;

    if (password.length < 8) passLengthValue = false;
    for (i = 0; i < password.length; i++) {
        if (specialChars.indexOf(password.charAt(i)) !== -1) passCharValue = true;
    };
    
    for (i = 0; i < email.length; i++) {
        if(email.charAt(i) === '@') emailValue = true;
    };
        
    if (firstName.length === 0) firstNameValue = false;
    if (lastName.length === 0) lastNameValue = false;

    if (passLengthValue !== true || passCharValue !== true) return 'Please make sure you entered a valid password';
    if (emailValue !== true) return 'Please make sure you entered a valid email address';
    if (firstNameValue !== true) return 'Please make sure you entered a valid first name';
    if (lastNameValue !== true) return 'Please make sure you entered a valid last name';
    if (passLengthValue, passCharValue, emailValue, firstNameValue, lastNameValue === true) return 'Correct credentials';
};

console.log (checkUser('email@test.com', 'Testson', 'Test', 'password:)'));