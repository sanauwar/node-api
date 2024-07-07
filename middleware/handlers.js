const logger = require('../logger')

module.exports = {
    handle: function (req, res, next) {
        try {
            logger.info('server.handler.begun');
            //func(req, res, logger);
            next()
        } catch (e) {
            logger.info('server.handler.failed');
            res.send('Oh no, something did not go well!');
        }
    }
}