/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:
 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
  const [sum1, sum2] = points.reduce(([sum1, sum2], point) => {
    const [point1, point2] = point.split("-");

    return [sum1 + Number(point1), sum2 + Number(point2)];
  }, [0, 0]);

  if (sum1 > sum2) return 1;
  if (sum1 < sum2) return 2;
  return;
}

module.exports = getWinner;
