
function checkNoId(body) {
  const bodyKeys = Object.keys(body);
  const haveId = bodyKeys.some(item => item === 'id');

  return haveId ? 'odd user field: id' : '';
}

function checkHaveOddKeys(body, model) {
  const userKeys = Object.keys(model);
  const bodyKeys = Object.keys(body);

  const oddKeys = bodyKeys.some(item => {
    return item === 'id'
      ||
      userKeys.indexOf(item) < 0
  });

  return oddKeys ? 'odd fields' : '';
}

function checkHaveMissingKeys(body, model) {
  const userKeys = Object.keys(model);
  const bodyKeys = Object.keys(body);

  const missingKeys = userKeys.some(item => {
    return item !== 'id'
      &&
      bodyKeys.indexOf(item) < 0
  })

  return missingKeys ? 'missing user fields' : '';
}

function checkEmail(email) {
  const isGmail = email.endsWith('@gmail.com');

  return !isGmail ? 'email must be gmail.com' : '';
}

function checkPhoneNumber(phoneNumber) {
  // phoneNumber: +380xxxxxxxxx
  if (!phoneNumber.startsWith('+380') || phoneNumber.length != 13) {
    return 'wrong phonenumber format';
  }
  return '';
}

function checkPassword(password) {
   return password.length < 3 ? 'password length must be greater than 3' : '';
}

// power - число, 1 < power < 100
function checkPower(power) {
  return power < 1 || power > 100 ? '1 < power < 100' : '';
}

// defense - число, 1 < defense < 10
function checkDefense(defense) {
  return defense < 1 || defense > 10 ? '1 < defense < 10' : '';
}

// health - число, 80 < health < 120, необов'язкове поле(за замовчуванням - 100)
function checkHealth(health) {
  return health < 80 || health > 120 ? '80 < health < 120' : '';
}

exports.checkDefense = checkDefense;
exports.checkPower = checkPower;
exports.checkHealth = checkHealth;

exports.haveId = checkNoId;
exports.haveOddKeys = checkHaveOddKeys;
exports.haveMissingKeys = checkHaveMissingKeys;
exports.checkEmail = checkEmail;
exports.checkPhoneNumber = checkPhoneNumber;
exports.checkPassword = checkPassword;