/**
 * Пароль называется криптостойким, если он включает в себя:
 *  - хотя бы одну строчную английскую букву,
 *  - хотя бы одну заглавную английскую букву
 *  - хотя бы одну цифру,
 *  - его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
  return password.length >= 7 && /[a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[0-9]+[a-z]+|[A-Z]+[a-z]+[0-9]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+/.test(password);
}

module.exports = validatePassword;
