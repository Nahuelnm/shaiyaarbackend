import sql from 'mssql';
import {config} from 'dotenv';
config();
const dbsettings ={
    user:'Shaiya',
    password:'shaiya123',
    server:process.env.IP,
    database:process.env.DATABASE,
    options:{
        encrypt:false,
        trustServerCertificate: true,
    }
}



async function getConnection(){
    try{
        const pool = await sql.connect(dbsettings);
        return pool;
    }catch (error){
        console.log(error)
    }

}

getConnection();

