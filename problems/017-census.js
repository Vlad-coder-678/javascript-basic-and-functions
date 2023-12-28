/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
  const manList = list.filter(({ gender }) => gender === "Male");
  if (manList.length === 0) return;

  const oldestMan = manList.sort(({ age: a }, { age: b }) => a - b).at(-1);
  return list.findIndex(({ age }) => age === oldestMan.age) + 1;
}

module.exports = census;
