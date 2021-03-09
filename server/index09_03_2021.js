require("express-async-errors");
const winston = require('winston');
const error = require('./middleware/error');
const config = require('config');
var cors = require("cors");
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();
// process.on("uncaughtException", (ex) => {
//   console.log("We Got An uncaughtException");
//   process.exit(1);
// });
// winston.exceptions.handle(
//   new winston.transports.File({ filename: 'exceptions.log' })
// );
process.on("unhandledRejection", (ex) => {
    console.log("We Got An unhandle Rejection");
    // process.exit(1);
    throw ex;
});
if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
// throw new Error("Something Faild During Startup");
const p = Promise.reject(new Error("Something Faild Misarably"));
p.then(() => console.log("Done"))
mongoose.connect('mongodb://localhost/myqbqnk21', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
app.use(cors());
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use(error);
const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on port ${port}...`));