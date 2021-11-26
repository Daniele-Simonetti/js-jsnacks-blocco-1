// jsnack2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo un array con gli invitati alla festa
const invitati = ["Cesare", "Massimo", "Lucio", "Pinco", "Marco"];
// console.log(Invitati);

// creo un prompt in cui chiedo il nome all'utente
let nome = prompt('Inserisca il nome');
console.log('il tuo nome è:', nome);

// creo la variabile boleana per dare un freno al ciclo
let find = false;

// creo un ciclo for per controllare tutta la lista degli invitati
for (i = 0; i < invitati.length; i++) {
  // console.log(Invitati[i]);
  // all'interno del ciclo controllo che il nome sia presente nella lista
  if (nome == invitati[i]) {
    find = true;
  } 
}

// se il nome è presente e quindi la variabile boleana diventa true allora stampo un alert, altrimenti ne stampo un altro
if (find == true) {
  alert('sei ammesso alla festa');
} else {
  alert(' non puoi entrare');
}


