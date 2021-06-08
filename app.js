const express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/', routes);


app.listen('3001', () => {
    console.log('Server started on port 3001');
})