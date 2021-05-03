/**
 * Tranzactie: { valoare, momentulTranzactiei }
 */

 function contBancar(numeCont, sumaInitiala, valutaContului) {
    const nume = numeCont;
    const valuta = valutaContului;
    let suma = sumaInitiala;
    const listaTranzactii = [];
  
    function adauga(valoare) {
      suma += valoare;
      adaugaTranzactie(valoare);
    }
  
    function retrage(valoare) {
      if (suma < valoare) {
        console.log("Nu ai suficiente fonduri");
        return;
      }
      suma -= valoare;
      adaugaTranzactie(-valoare);
    }
  
    function adaugaTranzactie(valoare) {
      // metoda privata, nu avem acces la ea din afara
      const tranzactie = { valoare: valoare, momentulTranzactiei: new Date() };
      listaTranzactii.push(tranzactie);
    }
  
    function interogheazaSold() {
      console.log(
        `Contul "${nume}" are la momentul actual suma de ${suma} ${valuta}`
      );
    }
  
    function afiseazaListaDeTranzactii() {
      console.log(`-------- Tranzactii ${numeCont} ---------`);
      if (listaTranzactii.length === 0) {
        console.log("Nu ai efectuat nicio tranzactie pana acum");
      } else {
        for (let tranzactie of listaTranzactii) {
          console.log(
            `Ai efectuat o tranzactie de ${tranzactie.valoare} ${valuta} in data de ${tranzactie.momentulTranzactiei}`
          );
        }
      }
    }
  
    return {
      suma, // este valoarea din momentul executiei metodei contBancar (ramane blocata in timp, indiferent de ce modificari aducem la variabila suma in afara contextului de executie)
      adauga,
      retrage,
      interogheazaSold,
      afiseazaListaDeTranzactii
    };
  }
  
 /* const contPersonal = contBancar("Contul meu personal", 0, "RON");
  const contDeEconomii = contBancar("Contul de economii", 100, "EUR");
  const cont = contBancar("Cont GBP", 1000000, "GBP");
  
  contPersonal.adauga(500);
  contDeEconomii.retrage(50);
  contDeEconomii.retrage(30);
  
  contPersonal.retrage(2000000);
  
  contDeEconomii.suma = 1000000; // nu are niciun efect asupra metodelor
  
  contPersonal.interogheazaSold();
  contDeEconomii.interogheazaSold();
  
  contDeEconomii.interogheazaSold();
  
  contPersonal.afiseazaListaDeTranzactii();
  contDeEconomii.afiseazaListaDeTranzactii();
  
  cont.afiseazaListaDeTranzactii();
  
  cont.interogheazaSold();
  */

let depositBtn = document.getElementById('deposit');
let withdrawBtn = document.getElementById('withdraw');
let input = document.getElementById('input').value;
let cont = contBancar('cont', 100, 'RON');
let counter = 1;

depositBtn.addEventListener('click', function (event){
  event.preventDefault();
  cont.adauga(Number(document.getElementById('input').value))
  var table = document.getElementById('table');
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = counter++;
  cell2.innerHTML = new Date().toUTCString();
  cell3.innerHTML = "Deposit";
  cell4.innerHTML = document.getElementById('input').value; 
});

withdrawBtn.addEventListener('click', function (event){
  cont.retrage(Number(document.getElementById('input').value));
  event.preventDefault();
  cont.adauga(Number(document.getElementById('input').value))
  var table = document.getElementById('table');
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = counter++;
  cell2.innerHTML = new Date().toUTCString();
  cell3.innerHTML = "Withdrawal";
  cell4.innerHTML = document.getElementById('input').value;
});

document.getElementById('balance').innerHTML = 'Current balance:'