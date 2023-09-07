/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

let f1 = function (n1, n2) {
  let: area = n1 + n2;
  return area;
};

console.log(f1(4, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
let crazySum = function (n3, n4) {
  if (n3 !== n4) {
    return n3 + n4;
  } else if (n3 === n4) {
    return (n3 + n4) * 3;
  }
};

console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let crazyDiff = function (n1) {
  if (n1 <= 19) {
    return Math.abs(n1 - 19);
  } else {
    return (n1 - 19) * 3;
  }
};

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let epify = function (inputstring) {
  if (inputstring !== "EPICODE") {
    return "EPICODE " + inputstring;
  } else if (inputstring === "EPICODE") {
    return inputstring;
  }
};

console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let check3and7 = function (n1) {
  if (n1 > 0 && (n1 % 3 === 0 || n1 % 7 === 0)) {
    return "divisibile per 3 o 7";
  } else if (n1 <= 0 && (n1 % 3 === 0 || n1 % 7 === 0)) {
    return "inserisci un numero con valore positivo";
  } else if (n1 > 0 && (n1 % 3 !== 0 || n1 % 7 !== 0)) {
    return "non è multiplo di 3 o 7 ";
  }
};

console.log(check3and7(7));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
let reverseString = function (inputString) {
  let characters = inputString.split("");

  let reversedCharacters = characters.reverse();

  let reversedString = reversedCharacters.join("");

  return reversedString;
};

console.log(reverseString("ciaociao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let cutString = function (inputString) {
  if (inputString.length >= 2) {
    return inputString.slice(1, -1);
  } else {
    return "";
  }
};

console.log(cutString("ciaociao"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let giveMeRandom = function (n) {
  let randomNumbers = [];

  for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * 11);

    randomNumbers.push(random);
  }

  return randomNumbers;
};

console.log(giveMeRandom(1000));
