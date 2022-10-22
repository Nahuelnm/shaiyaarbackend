import{getConnection, querys, sql} from'../database'

export const getUser = async (req,res) => {
    const pool = await getConnection();
    const { username, password} = req.body;
    const result = await pool.request().query("SELECT * FROM User_Masters WHERE")
    console.log(result);
}
export const newUser = async (req,res) => {
    const { userID, pw} = req.body;

    if (userID == null || pw == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
      }

    const userUID = await pool.request().query(querys.countUsers) + 1;
    const joinDate =new Date().toISOString().slice(0, 19).replace('T', ' ');
    const admin = 0;
    const adminLevel = 0;
    const usequeue=0;
    const status=0;
    const leaveDate= "2033-01-30 00:00:00";
    const userType = "N";
    const userIp = NULL;
    const modIp = NULL;
    const point = 0;
    const enpassword =NULL;
    const birth = NULL;
    try {
        const pool = await getConnection();
        await pool  
            .request()
            .input("UserUID",sql.Int, userUID)
            .input("UserId", sql.VarChar(18), userID)
            .input("Pw", sql.VarChar(12), pw)
            .input("JoinDate", sql.SmallDateTime, joinDate)
            .input("Admin",sql.Bit,admin)
            .input("AdminLevel",sql.TinyInt,adminLevel)
            .input("UseQueue",sql.Bit,usequeue)
            .input("Status",sql.SmallInt,status)
            .input("LeaveDate", sql.SmallDateTime,leaveDate)
            .input("UserType", sql.Char(1), userType)
            .input("UserIp", sql.VarChar(15), userIp)
            .input("ModIp", sql.VarChar(15), modIp)
            .input("Point", sql.Int, point)
            .input("Enpassword", sql.VarChar(32), enpassword)
            .input("Birth", sql.VarChar(8), birth)
            .query(querys.addNewUser)
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }

}