const heading = document.createElement('h1');
heading.textContent = 'Book List';
document.body.appendChild(heading);
const newList = document.createElement('ul');
document.body.appendChild(newList);
const list = document.querySelector('ul');

let books =[{
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    url: 'https://heart-agency-wp-v2.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/03/07124203/Jones_Ben_Metamorphosis-CORRECT-WEB-VERSION-07.08.19.jpg',
    image: 'vermin.jpg',
    isRead: true
},
{
    title: 'Dead Souls',
    author: 'Nikolai Gogol',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51SmVhoHDML._SX320_BO1,204,203,200_.jpg',
    image: 'deadsouls.jpg',
    isRead: false
},
{
    title: 'The Idiot',
    author: 'F. M. Dostoevsky',
    url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327865902l/12505.jpg',
    image: 'theidiot.webp',
    isRead: true
}];

for (i = 0; i < books.length; i++) {
    
const newListItem1 = document.createElement('li');
list.appendChild(newListItem1);
const listItem1 = document.getElementsByTagName('li')[i];
listItem1.textContent = `${books[i].title}`;
const newParagraph1 = document.createElement('p');
listItem1.appendChild(newParagraph1);
const paragraph1 = document.getElementsByTagName('p')[i];
paragraph1.textContent = `Book URL: ${books[0].url}`;
const newImage1 = document.createElement('img');
listItem1.appendChild(newImage1);
const image1 = document.getElementsByTagName('img')[i];
document.getElementsByTagName("img")[i].setAttribute("src", `${books[i].image}`)
document.getElementsByTagName("img")[i].setAttribute("width", 200);

if(books[i].isRead) document.getElementsByTagName('li')[i].setAttribute("style", "color:green")
else document.getElementsByTagName('li')[i].setAttribute("style", "color:red");
};