import sql from 'mssql';

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



async function getConnection(){
    const pool = await sql.connect(dbsettings);
    const result = await  pool.request().query('SELECT 1');
    console.log(result)
}

getConnection();