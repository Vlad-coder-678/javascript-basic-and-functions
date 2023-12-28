/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
  if(value === 0) return 0;

  const fib = [0, 1];
  while (fib.at(-1) < value) {
    fib.push(fib.at(-1) + fib.at(-2));
  }

  return fib.at(-1) === value ? fib.length - 1 : undefined;
}

module.exports = isFibonacci;
