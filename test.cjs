// --> Filter if the each letter in word is visibible by being in guessedLetters
const word = "test";
const guessedLetters = ["t", "e", "n"];

word.split("").map((letter, index) => {
  const visibility = guessedLetters.includes(letter)
    ? `${letter} is visible`
    : `${letter} NOT visible`;
  console.log(visibility);
});

// --- > Return the letters from guessedLetters that are not in word
// const word = "test";
// const guessedLetters = ["t", "e", "n"];

// const incorrectLetters = guessedLetters.filter(
//   (letter) => !word.includes(letter)
// );

// console.log(incorrectLetters);

// Select just parts of array .slice(start, end)
const BODY_PARTS = [
  "HEAD",
  "BODY",
  "RIGHT_ARM",
  "LEFT_ARM",
  "RIGHT_LEG",
  "LEFT_LEG",
];
const numberOfGuesses = 2;
console.log(BODY_PARTS.slice(0, numberOfGuesses));
