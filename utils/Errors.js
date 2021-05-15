class CommonError{
  constructor(message){
    this.message = message;
    this.status = 400;
  }
}

class AuthError{
  constructor(message){
    this.message = message;
    this.status = 401;
  }
}

exports.CommonError = CommonError;
exports.AuthError = AuthError; 