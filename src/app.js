import express from "express";
import config from "./config";
const app = express();

let port;
//setings
app.set('port', config.port );

export default app;