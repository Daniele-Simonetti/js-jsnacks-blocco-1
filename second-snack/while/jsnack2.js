// jsnack2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// creo un array con gli invitati alla festa
const invitati = ["Cesare", "Massimo", "Lucio", "Pinco", "Marco"];
console.log(invitati);

// creo un prompt in cui chiedo il nome all'utente
let nome = prompt('Inserisca il nome');
console.log('il tuo nome è:', nome);

// creo la mia variabile boleana per fermare il ciclo
let find = false;

// creo il mio contatore
let i = 0;

// creo il mio ciclo while
while (find == false && i < invitati.length) {
  if (nome == invitati[i]) {
    find = true;
  }
  i++
}

// creo una condizione per il banner
if (find == true) {
  alert('sei ammesso alla festa');
  console.log('sei ammesso alla festa');
} else {
  alert('non sei amesso alla festa');
  console.log('non sei ammesso alla festa');
}

