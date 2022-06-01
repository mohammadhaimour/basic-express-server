'use strict';
const express = require('express');
const app = express();
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

app.use(logger);


app.get('/person', validator(), (req, res) => {

    res.status(200).json({

        name: req.query.name
    });


});


app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {

    app.listen(port, () => {
        console.log(`i am listening on port ${port}`);
    });

}


module.exports = {
    app: app,
    start: start,
}