// inserisco la variabile che mi permetterà di fare la somma
let sum = 0;

// inserisco il mio contatore per il while
let i = 1;

while (i <= 10) {
  // il pormpt lo do con parsint affinchè mi faccia la somma di numeri e non unisca solo 2 stringhe
  const number = parseInt(prompt('inserisci un numero'));
  console.log('ordine', i);

  // effettuo la somma
  sum += number;
  i++;
  console.log('numero digitato', number);
}

console.log('totale', sum);