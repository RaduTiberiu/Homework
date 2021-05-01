let button = document.getElementById('btn');
let list = document.getElementById('list');
let input = document.getElementById('input');
let listLength = [];
document.getElementById('error').style.display = 'none';

//Border rosu si buton disabled & Mesaj de eroare

button.disabled = true;

input.addEventListener('blur', function(){
    if(input.value.length <= 3 ||
        input.value.length >= 10) {
            input.style.borderColor = 'red';
            button.disabled = true;
            document.getElementById('error').style.display = 'block';
        };
    if(input.value.length > 3 &&
        input.value.length < 10) {
            input.style.borderColor = 'black';
            button.disabled = false;
            document.getElementById('error').style.display = 'none'};
});

button.addEventListener('click', function() {
    // Validarea inputului
    if(document.getElementById("input").value.length < 3 ||
        document.getElementById("input").value.length > 10) {
        return alert('Input length must be between 3 and 10 characters')};

    for(i = 0; i < document.getElementById("input").value.length; i++) {
       let chars =  document.getElementById("input").value.split('');
        if(!isNaN(Number(chars[i]))) return alert('Input must not contain numbers');
    }

    //Adaugarea textului intr-un li si golirea inputului
    const newListItem1 = document.createElement('li');
    newListItem1.style.paddingBottom = '10px';
    list.appendChild(newListItem1);
    let inputValue = document.getElementById("input").value;
    let newTextNode = document.createTextNode(inputValue);
    newListItem1.appendChild(newTextNode);
    document.getElementById("input").value = '';

    //Input si buton disabled la o lista mai lunga de 10 itemi
    listLength.push(1);
    if(listLength.length > 9) {
        button.disabled = true;
        input.disabled = true;
    };

    //Stergerea unui element li la hover over
    let span = document.createElement('span');
    let text = document.createTextNode('X');
    span.className = 'delete';
    span.appendChild(text);
    span.style.paddingLeft = '40px';
    span.style.display = 'none';
    span.style.color = 'red';
    newListItem1.appendChild(span);
    newListItem1.addEventListener('mouseover', function(){span.style.display = 'inline'});
    newListItem1.addEventListener('mouseout', function(){span.style.display = 'none'});
    span.addEventListener('click', function(){span.parentElement.style.display = 'none'});
});