const winston = require('winston');
require('winston-mongodb');
winston.add(new winston.transports.MongoDB({ db: "mongodb://localhost/myqbqnk21", level: 'info' }));
var logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logger.log' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
    ]
});
module.exports = function (err, req, res, next) {
    logger.error(err.message, err);
    res.status(500).send('Something failed.');
}