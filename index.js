const express = require('express');
const compression = require('compression');
const logger = require('morgan');

const app = express();

/**
    Middleware Configurations
 */
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.send('Merci j\'ai bien reçu la demande et je suis content')
})
app.listen(3000, () => console.log('Serveur démarré avec succès.'))