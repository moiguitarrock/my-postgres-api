require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const get = require('lodash').get;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

require('./routes/index')(app);

const { PORT } = process.env;

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${req.method} ${req.url} ${error.message}`);
  }
  if (error instanceof SyntaxError) {
    return res.status(400).send({
      statusCode: 400,
      error: 'Syntax error, check the payload format'
    });
  }

  console.log(error);
  if (error.response && error.response.data) {
    const details = get(error, 'response.data.details', '');
    const message = get(error, 'error.response.data.message', '');

    return res.status(error.response.status).send({ error: message, details });
  } else {
    return res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
