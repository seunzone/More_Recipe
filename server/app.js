import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import api from './routes/api';
// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();


// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', api);


// Default route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(port);
