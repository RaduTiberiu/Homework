var cToF = (celsius) => {
    fahrenheit = (celsius * 1.8) + 32;
    console.log(fahrenheit);
}

var fToC = (fahrenheit) => {
    celsius= (fahrenheit - 32)/1.8;
    console.log(celsius);
}

cToF(0);
fToC(32);