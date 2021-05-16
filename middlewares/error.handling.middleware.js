// import {} from './response.middleware';

const errorHandlingMiddleware = (err, req, res, next) => {
  
  next();
}

exports.errorHandlingMiddleware = errorHandlingMiddleware;