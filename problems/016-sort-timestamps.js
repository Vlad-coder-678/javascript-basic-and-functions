/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
  const toSeconds = (timestamp) => {
    const [h, m, s] = timestamp.split(":").map(i => Number(i));
    return h * 3600 + m * 60 + s;
  };

  const toTimestamp = (seconds) => {
    const date = new Date(seconds * 1000);

    const h = date.getUTCHours();
    const m = date.getUTCMinutes();
    const s = date.getUTCSeconds();

    const cut = m => `0${m}`.slice(-2);
    return `${cut(h)}:${cut(m)}:${cut(s)}`;
  }

  return list.map(timestamp => toSeconds(timestamp)).sort((a, b) => a - b).map(seconds => toTimestamp(seconds));
}

module.exports = sortTimestamps;
