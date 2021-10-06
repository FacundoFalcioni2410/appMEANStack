const express = require('express');
const morgan = require('morgan');

const path = require('path');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/photos', express.static(path.resolve('photos')));

app.use('/product',require('./routes/product.routes'));
app.use('/user',require('./routes/user.routes'));
app.use('/cart',require('./routes/cart.routes'));

module.exports = app;