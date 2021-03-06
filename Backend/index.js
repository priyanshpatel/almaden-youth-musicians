var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./config/db_config');
var { frontend_url } = require('./config/config')
var path = require('path')
var app = express();
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require('cors');
const config = require('./config/config')

const PORT = process.env.PORT || 3001;

// Session Management
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))
app.use(cors({ origin: frontend_url, credentials: true }));
app.use(
    session({
        key: 'user_id',
        secret: "almaden_youth_musicians",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 6000000
        }
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( ( req, res, next ) => {
    res.setHeader( 'Access-Control-Allow-Origin', config.frontend_url );
    res.setHeader( 'Access-Control-Allow-Credentials', 'true' );
    res.setHeader( 'Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE' );
    res.setHeader( 'Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers' );
    res.setHeader( 'Cache-Control', 'no-cache' );
    next();
});

const contactus = require('./modules/contactus')
const login = require('./modules/login')

app.use('/contactus', contactus)
app.use('/login', login)

app.use( express.static( "public" ) );

app.listen( PORT, () => {
    console.log( "Server listening on port: ", PORT );
} );