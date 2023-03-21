const express = require("express");
const server = express(); //create instance of express server
const CORS = require("cors");
const helmet = require("helmet");
const router = require('./routes.index')
const port = 4507;
const hostname = '127.0.0.1';

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

server.use(express.json()); // allows express to read .json from body of request
server.use(CORS());
server.use(helmet());
server.use('/', router)

server.listen(port, () => console.log(`🚀 Server ready at http://${hostname}:${port}/`));

module.exports = server;