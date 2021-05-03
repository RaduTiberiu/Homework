function signIn(username, password, role) {
    if(typeof(username) != "string") {
        console.log('Username is not a string');
        return;
    };
    if(typeof(password) != "string") {
        console.log('Password is not a string');
        return;
    };
    if(username.length == 0) {
        console.log('Please fill in username');
        return;
    };
    if(password.length == 0) {
        console.log('Please fill in password');
        return;
    };
    if(role.length == 0) console.log(`Hi ${username}! Welcome to the app. Let's get studying`);
    if(role == "student") console.log(`Hi ${username}! Welcome to the app. Let's get studying`);
    if(role == "teacher") console.log(`Hi ${username}! Welcome to the app. Let's get teaching`);
    if(role == "admin") console.log(`Hi ${username}! Welcome to the app. Let's get managing`);
}

signIn(1, 'pass', 'student');
signIn('John', 1, 'student');
signIn('', 'pass', 'student');
signIn('John', '', 'student');
signIn('John', 'pass', '');
signIn('John', 'pass', 'student');
signIn('John', 'pass', 'teacher');
signIn('John', 'pass', 'admin');