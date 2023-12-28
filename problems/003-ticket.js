/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
  const sum = str => str.split("").reduce((sum, item) => sum + Number(item), 0);
  const middleIndex = number.length / 2;

  return sum(number.slice(0, middleIndex)) === sum(number.slice(middleIndex));
}

module.exports = checkTicket;
