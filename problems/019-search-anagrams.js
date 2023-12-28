/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
  const words = value.replace(/[^а-яА-Я ]/g, "").split(" ");
  const formattedWords = words.map(str => str.toLowerCase().split("").sort().join(""));

  const countWords = {};
  for (const formattedWord of formattedWords) {
    countWords[formattedWord] = countWords[formattedWord] ? countWords[formattedWord] + 1 : 1;
  };

  return formattedWords
    .reduce((resultArray, formattedWord, index) => countWords[formattedWord] > 1 ? [...resultArray, words[index]] : resultArray, [])
    .join(" ");
}

module.exports = searchAnagrams;
