window.onload = onLoaded;

const colors = [
  "red",
  "green",
  "blue",
  "maroon",
  "pink",
  "purple",
  "orange",
  "grey",
  "voilet",
  "yellow",
];

function generateRandomColor() {
  const randomNumber = Math.floor(Math.random() * 10);
  return colors[randomNumber];
}

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function onLoaded() {


  function onBtnClicked(
    characterRangeValue,
    isUpperCaseValue,
    isLowerCaseValue,
    isSymbolsValue
  ) {
    const passwordDisplayDiv = document.querySelector("#passwordDisplay");

    const randomColor = generateRandomColor();
    console.dir(passwordDisplayDiv)
    passwordDisplayDiv.style.backgroundColor = randomColor;
    const passwordGenerated = generatePassword(
      characterRangeValue,
      isUpperCaseValue,
      isLowerCaseValue,
      isSymbolsValue
    );
    passwordDisplayDiv.innerText = passwordGenerated;
  }
  const characterRange = document.querySelector("#rangeCharacter");
  console.dir(characterRange);

  const isUpperCase = document.querySelector("input[name='include-uppercase']");

  const isLowerCase = document.querySelector("input[name='include-lowercase']");

  const isSymbols = document.querySelector("input[name='include-symbols']");
  const numberLengthInput = document.querySelector(
    "input[name='numberCharacter']"
  );

  let characterRangeValue = characterRange.value;
  let numberLengthValue = numberLengthInput.value;
  const isUpperCaseValue = isUpperCase.checked;
  const isLowerCaseValue = isLowerCase.checked;
  const isSymbolsValue = isSymbols.checked;

  numberLengthInput.onmousemove = function () {
    characterRange.value = numberLengthInput.value;
  };

  characterRange.onmousemove = function () {
    numberLengthInput.value = characterRange.value;
  };

  characterRange.onchange = function () {
    onBtnClicked(
      characterRangeValue,
      isUpperCaseValue,
      isLowerCaseValue,
      isSymbolsValue
    );
  };
}
