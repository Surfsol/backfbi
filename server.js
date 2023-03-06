const express = require("express");
const server = express(); //create instance of express server
const CORS = require("cors");
const helmet = require("helmet");
const router = require('./routes.index')
//const session = require("express-session") //reads and writes cookies in req, res,  do not use with a cookie-parser
const port = 4500;
const hostname = '127.0.0.1';
// const proRouter = require("../routes-models/projects/project-routes");
// const tecRouter = require("../routes-models/techs/techs-router");
// const ptRouter = require("../routes-models/pt/pt-router");
// const techsProjectRouter = require("../routes-models/techsProject/techsProject-router")
// const twilioRouter = require("../routes-models/Twilio/twilio-router");
// const mailerRouter = require("../routes-models/mailer/mailer-router")
// const authRouter = require("../routes-models/auth/auth-router")
// const commentRouter = require('../routes-models/comments/comments-router')

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
// server.use(session(sessionConfig))
// server.use("/projects", proRouter);
// server.use("/tech", tecRouter);
// server.use("/pt", ptRouter);
// server.use("/techsProject", techsProjectRouter);
// server.use("/twilio", twilioRouter);
// server.use("/mailer", mailerRouter)
// server.use("/auth", authRouter)
// server.use("/comments", commentRouter)



server.listen(port, () => console.log(`🚀 Server ready at http://${hostname}:${port}/`));

module.exports = server;