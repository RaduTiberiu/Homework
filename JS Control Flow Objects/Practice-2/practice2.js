//First two bullet points
console.log('--- First two bullet points ---');

let books = [
    {title: "Dead Souls",
    author: "N. Gogol",
    isread: false},
    {title: "The Idiot",
    author: "F. M. Dostoevsky",
    isread: true},
    {title: "Discourses",
    author: "Epictetus",
    isread: false},
    {title: "The Trial",
    author: "F. Kafka",
    isread: true},
    {title: "Brave New World",
    author: "A Huxley",
    isread: true},
    {title: "In Search of Lost Time",
    author: "M. Proust",
    isread: true},
    {title: "Faust",
    author: "J. W. Goethe",
    isread: true}
];

for(var i = 0; i < books.length; i++) {
console.log(`${books[i]["title"]} by ${books[i]["author"]}`);
}

//Last bullet point
console.log(' ');
console.log ('--- Last bullet point ---');

for(var i = 0; i < books.length; i++) {
    if (books[i]["isread"] === true) {
        console.log(`${books[i]["title"]} by ${books[i]["author"]} is read.`); 
    } else {
        console.log(`${books[i]["title"]} by ${books[i]["author"]} is NOT read.`);
    }
}