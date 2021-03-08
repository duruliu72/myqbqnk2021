const winston = require('winston');
var logger = winston.createLogger({
    level: 'info',
    transports: [
        // new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'somefile.log' })
    ]
});
module.exports = function (err, req, res, next) {
    logger.error(err.message, err);
    res.status(500).send('Something failed.');
}