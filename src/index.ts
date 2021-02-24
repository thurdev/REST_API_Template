'use strict';

/* .ENV */
require('dotenv').config()

/* EXPRESS */
const express = require('express');
const app = express();

/* BODY PARSER */
const bodyParser = require('body-parser')
/* PARSE application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }))
/* PARSE application/json */
app.use(bodyParser.json());

/* CORS */
const cors = require('cors');
/* ENABLE CORS */
app.use(cors());

/* HELMET */
const helmet = require('helmet');
/* ADD Helmet TO ENHANCE API's SECURITY */
app.use(helmet());

/* MORGAN */
const morgan = require('morgan');
/* ADD MORGAN TO LOG HTTP REQUESTS */
app.use(morgan('combined'));

/* Database Connection */
require('./database');


/* SERVER */
const http = require('http').Server(app);


/* SOCKET.IO */
const io = require('socket.io')(http);

/* SOCKET EVENTS/LISTENER */
const connection = require('./socket/on/connection');
io.on('connection', connection);


/* ROUTES */
const RouteTemplate = require('./routes/RouteTemplate');

app.use('/api/v1/', RouteTemplate);

/* START SERVER */
http.listen(process.env.API_PORT, () => {
    console.log(`*:${process.env.API_PORT}`);
});