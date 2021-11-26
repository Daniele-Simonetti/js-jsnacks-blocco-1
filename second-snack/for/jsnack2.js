// jsnack2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo un array con gli invitati alla festa
const Invitati = ["Cesare", "Massimo", "Lucio", "Pinco", "Marco"];
// console.log(Invitati);

// creo un prompt in cui chiedo il nome all'utente
let Nome = prompt('Inserisca il nome');
console.log('il tuo nome è:', Nome);

// creo un ciclo for per controllare tutta la lista degli invitati
for (i = 0; i < Invitati.length; i++) {
  console.log(Invitati[i]);
  // se il nome che inserisce l'utente è uguale ad uno di quelli nella lista, allora stampo il mex: puoi partecipare alla festa
  if (Invitati[i] == Nome) {
    alert('Sei ammesso alla festa');
  }
}

