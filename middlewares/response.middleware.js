const responseMiddleware = (req, res, next) => {
    // TODO: Implement middleware that returns result of the query

    if (req.res.err && req.res.err.error) {
        res.status(req.res.err.status);
        res.body = { error: true, message: req.res.err.message };
    }
    
    res.send(res.body);

    next();
}

exports.responseMiddleware = responseMiddleware;