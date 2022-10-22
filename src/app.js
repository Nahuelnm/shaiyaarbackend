import express from "express";
import config from "./config";
import userMaster from "./routes/UserMaster.routes";

const app = express();

let port;
//setings
app.set('port', config.port );
app.use(userMaster)
export default app;