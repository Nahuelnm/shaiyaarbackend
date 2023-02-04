
const sql =require('mssql')
const dbsettings ={
    user:'Shaiya',
    password:'shaiya123',
    server:'127.0.0.1',
    database:'PS_UserData',
    options:{
        encrypt:false,
        trustServerCertificate: true,
    }
}



exports.getConnection = async()=>{
    try{
        const pool = await sql.connect(dbsettings);
        return pool;
    }catch (error){
        console.log(error)
    }

}
module.exports = sql;