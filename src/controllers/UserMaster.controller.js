import{getConnection} from'../database/conection'

export const getUser = async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM User_Master")
    console.log(result);
}