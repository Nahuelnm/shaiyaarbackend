import express from "express";
import config from "./config";
import userMaster from "./routes/UserMaster.routes.js";

const app = express();

let port;
//setings
app.set('port', config.port );

app.use(express.json())
app.use(express.urlencoded({ extended:false}))
app.use(userMaster)

export default app;