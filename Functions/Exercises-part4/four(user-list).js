function checkUser([user1, user2, user3, user4]) {

    let specialChars = "*|,\":<>[]{}`\';()@&$#%";
    let passLengthValue = true;
    let passCharValue = false;
    let emailValue = true;
    let firstNameValue = true;
    let lastNameValue = true;
    let isUserValid = false;

    if (password.length < 8) passLengthValue = false;
    for (i = 0; i < password.length; i++) {
        if (specialChars.indexOf(password.charAt(i)) !== -1) passCharValue = true;
    };
    
    for (i = 0; i < email.length; i++) {
        if(email.charAt(i) === '@') emailValue = true;
    };
        
    if (firstName.length === 0) firstNameValue = false;
    if (lastName.length === 0) lastNameValue = false;

    if (passLengthValue, passCharValue, emailValue, firstNameValue, lastNameValue) isUserValid = true;
    
    var validUsers = [];

    if (user1.isUserValid = true) validUsers.push(user1);
    if (user2.isUserValid = true) validUsers.push(user2);
    if (user3.isUserValid = true) validUsers.push(user3);
    if (user4.isUserValid = true) validUsers.push(user4);

    return validUsers;
};

let firstUser = {password:'pass', 
    email:'test1', 
    firstName:'first1', 
    lastName:'last1'};
let secondUser = {
    password:'password:)2', 
    email:'test2@mail.com', 
    firstName:'first2', 
    lastName:'last2'};
let thirdUser = {
    password:'password:)3', 
    email:'test3@mail.com', 
    firstName:'first3', 
    lastName:'last3'};
let fourthUser = {
    password:'password:)4', 
    email:'test4@mail.com', 
    firstName:'first4', 
    lastName:'last4'};

console.log(checkUser([firstUser, secondUser, thirdUser, fourthUser]));