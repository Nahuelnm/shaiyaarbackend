const express = require("express")
const userMaster = require("../src/api/routes/UserMaster.routes")
const port = process.env.PORT || 3000
const cors =require("cors")
const app = express();


var corsOptions = {
    "origin":"*",
    "methods":"GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue":false,
    "optionsSuccessStatus":204
}

//setings
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.use(userMaster)
app.set('port', port );

app.listen(port, ()=>{
    console.log('Server running on: ',port);
});