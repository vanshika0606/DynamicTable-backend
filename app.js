const express = require("express");
const bodyParser= require("body-parser");
const cors = require('cors')
const app= express();


app.use(cors());

const customer = require("./routes/route.js")
const account = require("./routes/accountRoute.js")



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



// app.use("/" ,customer );
app.use("/", account)


module.exports = app;