/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
  let res = 0;

  if (n === 1) return res;

  while (n > 1) {
    if (n % 2 === 1) {
      res = undefined;
      break;
    }

    n = n / 2;
    res = res + 1;
  }

  return res;
}

module.exports = getPower;
