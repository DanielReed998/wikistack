const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
//const server = app.listen(PORT);

const models = require('./models');

models.User.sync({})
    .then(() => {
        return models.Page.sync({});
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Port is listening on 3000!!!!!!');
        });
    })
    .catch(console.error);