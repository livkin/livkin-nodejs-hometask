const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
   if (req.err !== undefined)  {
       res.status = 400;
       res.body = {
           error: true,
           message: req.err, 
       };
   } else {
       res.status = 200;
       res.body = req.body;
   }
   
   res.send(res.body);

   next();
}

exports.responseMiddleware = responseMiddleware;