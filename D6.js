// /*
// REGOLE
// - Tutte le risposte devono essere scritte in JavaScript
// - Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
// - Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
// - Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
// - Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
// */

// /* ESERCIZIO 1
//  Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
// */

// console.log("\nEsercizio 1 \n");

// function area(a, b) {
//   console.log("La base è", a);
//   console.log("L'altezza è", b);
//   console.log("L'area è", a * b);
// }
// area(5, 4);

// const l1 = 3;
// const l2 = 5;

// /* ESERCIZIO 2
//  Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
//  La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
//  la loro somma moltiplicata per tre.
// */

// console.log("\nEsercizio 2 \n");
// let somma = 0;
// function crazySum(a, b) {
//   if (a != b) {
//     somma = a + b;
//     console.log("I due numeri sono diversi e la loro somma è: " + somma);
//   } else {
//     somma = (a + b) * 3;
//     console.log(
//       "I due numeri sono uguali e la loro somma viene moltiplicata per tre: " +
//         somma
//     );
//   }
// }
// crazySum(3, 7);

// /* ESERCIZIO 3
//  Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
//  Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
// */

// console.log("\nEsercizio 3\n");

// let diff = 0;
// function crazyDiff(a) {
//   if (a > 19) {
//     diff = a - 19;
//     console.log("La differenza assoluta è :" + diff);
//   } else {
//     diff = 19 - a;
//     console.log("La differenza assoluta è :" + diff);
//   }
// }
// crazyDiff(15);

// /* ESERCIZIO 4
//  Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
//  se n è uguale a 400.
// */

// console.log("\nEsercizio 4\n");
// function boundary(a) {
//   if ((a <= 100 && a >= 20) || a == 400)
//     console.log(
//       true + " Il numero " + a + " è compreso tra 20 e 100 o è uguale a 400"
//     );
//   else
//     console.log(
//       false +
//         " Il numero " +
//         a +
//         " non è compreso tra 20 e 100 o non è uguale a 400"
//     );
// }
// boundary(80);

// /* ESERCIZIO 5
//  Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
//  La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
//  ritornare la stringa originale senza alterarla.
// */

// const epify = (stringa) => {
//   if (stringa.startsWith("EPICODE")) return stringa;
//   else return "EPICODE " + stringa;
// };
// console.log(epify("EPICODE italia"));
// console.log(epify("global"));

// /* ESERCIZIO 6
//  Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
//  di 3 o di 7. (Suggerimento: usa l'operatore modulo)
// */
// console.log("\nEsercizio 6\n");
// const n1 = -3;
// function check3and7() {
//   if (n1 > 0) {
//     if (n1 % 3 == 0 || n1 % 7 == 0) {
//       console.log(n1 + " è multiplo di 3 o 7");
//     } else console.log(n1 + " non è multiplo di 3 o 7");
//   } else console.log(n1 + " è negativo");
// }
// // check3and7();

// /* ESERCIZIO 7
//  Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
// */
console.log("\nEsercizio 7\n");

function reverseString(stringa) {
  let newStringa = "";
  for (let i = stringa.length - 1; i >= 0; i--) {
    newStringa += stringa[i];
  }
  console.log(newStringa);
}
reverseString("Global");

// /* ESERCIZIO 8
//  Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
//  La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.*/

// console.log("\nEsercizio 8\n");

// // const str = "ciao sono daniele";
// function upperFirst(str) {
//   const arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   const str2 = arr.join(" ");
//   console.log(str2);
// }
// upperFirst(" ciao sono daniele");

// /* ESERCIZIO 9
//  Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
//  della stringa originale.
// */
// console.log("\nEsercizio 9\n");
// const string1 = "hello";
// // let string2 = " ";

// function cutString() {
//   let string2 = string1.slice(1);
//   let string3 = string2.slice(0, -1);
//   console.log(string3);
// }
// // cutString();

// /* ESERCIZIO 10
//  Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.*/

// console.log("\nEsercizio 10\n");
// let nRandom = 5;
// function giveMeRandom() {
//   if (nRandom > 0) {
//     let randInt = Math.floor(Math.random() * 10);
//     console.log(
//       "parametro inserito " + nRandom + "\nNumero random :" + randInt
//     );
//   } else console.log("parametro non dato");
// }

// // giveMeRandom();
