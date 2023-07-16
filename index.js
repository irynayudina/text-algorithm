
/*
Вимоги:
- програма приймає на вхід довільний текст і знаходить в кожному слові цього тексту найперший символ, який більше НЕ повторюється в аналізуємому слові
- далі із отриманого набору символів програма повинна вибрати перший унікальний (тобто той, який більше не зустручається в наборі) і повернути його.
*/


function getWordsFromString(text) {
  // регулярний вираз для знаходження слів
  let wordPattern = /\w+/g;

  // Виділити в масив слова з тексту за допомогою регулярного виразу
  let wordsArray = text.match(wordPattern);

  return wordsArray;
}

function getFirstUniqueChar(text) {
  const chartMap = {};
  
  // заповнити мапу частотами літер тексту (слова або масиву літер)
  for (let char of text) {
    if (!chartMap.hasOwnProperty(char) && char) {
      chartMap[char] = 0;
    }
    chartMap[char] += 1;
  }
  
  // обрати та повернути першу літеру що має частоту 1 - не повторюється
  for (const prop in chartMap) {
    if (chartMap.hasOwnProperty(prop) && chartMap[prop] === 1) {
      return prop;
    }
  }
  
  return null;
}

function findFirstUniqueCharacter(referenceText) {
  // отримати масив слів з вхідного тексту
  let words = getWordsFromString(referenceText);

  let firstUniqueLettersOfWords = [];

  // сформувати масив з найперших символів що не повторюються у слові - перша частина програми
  words.forEach((w) => {
    firstUniqueLettersOfWords.push(getFirstUniqueChar(w));
  });
    
  // вибрати перший унікальний символ з набору - друга частина програми
  const result = getFirstUniqueChar(firstUniqueLettersOfWords);

  return result;
}

const referenceText = `The Tao gave birth to machine language. Machine language gave birth
to the assembler.
The assembler gave birth to the compiler. Now there are ten thousand
languages.
Each language has its purpose, however humble. Each language
expresses the Yin and Yang of software. Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
-- Geoffrey James, "The Tao of Programming"`;

const firstUniqueChar = findFirstUniqueCharacter(referenceText);
console.log(firstUniqueChar); // очікаваний результат - "m"
