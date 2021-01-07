const express = require('express');
const path = require('path');

const viewRouter = require('./routes/viewsRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', viewRouter);
app.use('/api/checkout', checkoutRouter);

module.exports = app;
