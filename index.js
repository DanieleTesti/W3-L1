//1)definizione di una funzione
function greet() {
  console.log("Ciao a tutti");
  //istruzioni da eseguire
}

//2)Invocare una funzione
// greet();

// 1)crei la funzione e lui crea la memoria
// 2)vede la funzione e cerca s ci sono le istruzioni

let counter = 0;

function sayHiTo(name, num) {
  if (name) {
    console.log("Ciao " + (num + 1) + name + counter);
  } else {
    console.log("Non hai inserito un nome");
  }
  counter++;
}
// createHeader("Parametri 2", "><", 25);
// sayHiTo("Antonio", 30);
// sayHiTo("Luca", 19);
// sayHiTo(17, "Omar"); Omar+1, 17   ===>Omar1/17    ===>Omar117

function createHeader(message, symbol, iterationCount) {
  let concatenatedSymbol = "";
  for (let i = 0; i < iterationCount; i++) {
    concatenatedSymbol += symbol;
  }
  //   console.log("\n" + text);
  console.log(
    "\n" + concatenatedSymbol + " " + message + " " + concatenatedSymbol
  );
}

// createHeader("Parametri 1", "#", 15);
// createHeader("Parametri 2", "><", 25);

const addTen = function (num) {
  let result = num + 10;
  return result;
};
let computedResult = addTen(1);
let computedResult2 = addTen(10);
let computedResult3 = addTen(27);
// console.log("Questo è il risulto " + computedResult);
// console.log("Questo è il risulto " + computedResult2);
// console.log("Questo è il risulto " + computedResult3);

const capitalizeFirst = (string) => {
  const words = string.split(" ");
  //   console.log("Array di parole ", words);

  let wordsCapitalized = "";

  for (i = 0; i < words.lenght; i++) {
    const word = words[i];

    const firstLetter = word.charAt(0).toUpperCase();
    const otherLetters = word.slice(1);
    const capitalized = firstLetter + otherLetters;

    if (i === 0) {
      wordsCapitalized = capitalized;
    } else {
      wordsCapitalized = wordsCapitalized + " " + capitalized;
    }
  }
};

// capitalizeFirst("epicode");
