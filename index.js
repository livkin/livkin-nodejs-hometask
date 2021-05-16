const express = require('express')
const cors = require('cors');
require('./config/db');
const { responseMiddleware } = require('./middlewares/response.middleware');

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
routes(app);

app.use(function(err, req, res, next) {
  res.err = {
    status: err.status ? err.status : 400,
    error: true,
    message: err.message
  }
  console.log(err.stack);
  next();
}, responseMiddleware);

app.use('/', express.static('./client/build'));

const port = 3050;
app.listen(port, () => {});

exports.app = app;