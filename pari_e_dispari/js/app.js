const userChoice = prompt("Scegli pari o dispari").toLowerCase();
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

const computerNumber = Math.floor(Math.random() * 5) + 1;
const sum = userNumber + computerNumber;

const isEven = (number) => number % 2 === 0;

let result;
if (isEven(sum) && userChoice === "pari") {
  result = "Hai vinto!";
} else if (!isEven(sum) && userChoice === "dispari") {
  result = "Hai vinto!";
} else {
  result = "Hai perso.";
}

alert(`Il tuo numero è: ${userNumber}
Il numero del computer è: ${computerNumber}
La somma è: ${sum}
${result}`);
