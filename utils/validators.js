
function checkNoId(body, err) {

  const bodyKeys = Object.keys(body);

  const haveId = bodyKeys.some(item => {
      return item === 'id';
  });

  if (haveId) {
      err.error = true;
      err.message += 'odd user field: id; ';
  
      return false;
  };

  return true;

}

function checkHaveOddKeys(body, model, err) {

  const userKeys = Object.keys(model);
  const bodyKeys = Object.keys(body);

  const oddKeys = bodyKeys.some(item => {
      return item === 'id'
          ||
          userKeys.indexOf(item) < 0
  });

  if (oddKeys) {
      err.error = true;
      err.message += 'odd user fields; ';

      return false;
  };

  return true;    

} 

function checkHaveMissingKeys(body, model, err) {
  
  const userKeys = Object.keys(model);
  const bodyKeys = Object.keys(body);

  const missingKeys = userKeys.some(item => {
      return item !== 'id'
          &&
          bodyKeys.indexOf(item) < 0
  })

  if (missingKeys) {
      err.error = true;
      err.message += 'missing user fields; ';
      return false;
  };

  return true;
}

function checkEmail(email, err){
  
  if (!email.endsWith('@gmail.com')) {
    err.error = true;
    err.message += 'email must be gmail.com; ';
    return false;
  }

  return true;
}

function checkPhoneNumber(phoneNumber, err) {
// phoneNumber: +380xxxxxxxxx
  if(!phoneNumber.startsWith('+380') || phoneNumber.length != 13) {
    err.error = true;
    err.message += 'wrong phonenumber format; ';
    return false;
  }
}

function checkPassword(password, err) {
  if(password.length < 3) {
    err.error = true;
    err.message += 'password length must be greater than 3; ';
    return false;
  }
}

exports.haveId = checkNoId;
exports.haveOddKeys = checkHaveOddKeys;
exports.haveMissingKeys = checkHaveMissingKeys;  
exports.checkEmail = checkEmail;
exports.checkphoneNumber = checkPhoneNumber;
exports.checkPassword = checkPassword;