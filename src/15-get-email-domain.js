/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

 function getEmailDomain(email) {

  const index = email.lastIndexOf('@');
  return email.split('').splice(index + 1).join('');
}

module.exports = getEmailDomain;

module.exports = getEmailDomain;
