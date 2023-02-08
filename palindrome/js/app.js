const word = prompt("Inserisci una parola: ");

const isPalindrome = (word) => {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

if (isPalindrome(word)) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}
