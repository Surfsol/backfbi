const express = require("express");
const app = express(); //create instance of express server
const CORS = require("cors");
const helmet = require("helmet");
const router = require('./routes.index')

//cookie details
const sessionConfig = {
    name:"jameson",
    secret: process.env.SESSION,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1 hour storage
        //prevent cookie being sent over http (unencrypted)
        secure: false, //false in development, true in production
        httpOnly: true, //cookie cannot be access from JS, always set true
    },
    resave: false, //recreate session, even if has not changed. Reduce chatter in session storage
    saveUninitialized: true //GDPR laws, setting cookies automatically. Should change dynamically if user accepts cookies
}

app.use(express.json()); // allows express to read .json from body of request
app.use(CORS());
app.use(helmet());
app.use('/data', router)

module.exports = app;