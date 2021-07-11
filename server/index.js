const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Users, Items, Transactions } = require('../database');
const { getTransactions } = require('../routes');

mongoose.connect('mongodb://localhost/smokeys', {
  useNewUrlParser : true,
  useUnifiedTopology : true
});

const db = mongoose.connection;
db.on('error', err => console.log(err.message));
db.on('open', () => console.log(`Connected to Smokey's DB`));

let port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.route(/* ... */);
//   //.get()
//   //.post()
//   //...

app.route('/transactions/')
  .get(getTransactions)

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})