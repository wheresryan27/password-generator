// Generate two random passwords when button is clicked, 15 characters long
// Copy-on-click (extra)
// Toggle symbols/numbers (extra)

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.querySelector("#password-one-el");
let passwordTwo = document.querySelector("#password-two-el");
let charLength = 15;

function generatePassword() {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
  for (let i = 0; i < charLength; i++) {
    let randomPasswordOne =
      characters[Math.floor(Math.random() * characters.length)];
    let randomPasswordTwo =
      characters[Math.floor(Math.random() * characters.length)];
    passwordOne.textContent += randomPasswordOne;
    passwordTwo.textContent += randomPasswordTwo;
  }
}
