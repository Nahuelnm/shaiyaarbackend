import { getConnection, querys, sql } from "../database";

exports.getUser = async (req,res) => {
    const pool = await getConnection();
    const userID = req.body.userID;
    const pw = req.body.pw;
    const result = await pool.request().query("SELECT * FROM User_Masters WHERE")
    console.log(result);
}

exports.newUser = async (req,res) => {

    const userID = req.body.userID;
    const pw = req.body.pw;
    console.log(req.body.userID);
    console.log(req.body.pw);

    if (userID == null || pw == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
      }

    const userUID = 4;
    const joinDate =new Date().toISOString().slice(0, 19).replace('T', ' ');
    const admin = 0;
    const adminLevel = 0;
    const usequeue=0;
    const status=0;
    const leaveDate= null;
    const userType = "N";
    const userIp = null;
    const modiIp = null;
    const modidate = null;
    const point = 0;
    const enpassword =null;
    const birth = null;
    const leave = 0;
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
            .input("Leave",sql.SmallInt,leave)
            .input("LeaveDate", sql.SmallDateTime,leaveDate)
            .input("UserType", sql.Char(1), userType)
            .input("UserIp", sql.VarChar(15), userIp)
            .input("ModiIp", sql.VarChar(15), modiIp)
            .input("ModiDate", sql.SmallDateTime, modidate)
            .input("Point", sql.Int, point)
            .input("Enpassword", sql.VarChar(32), enpassword)
            .input("Birth", sql.VarChar(8), birth)
            .query(querys.addNewUser);
            res.status(200);
            res.send("created user ok");
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }

}