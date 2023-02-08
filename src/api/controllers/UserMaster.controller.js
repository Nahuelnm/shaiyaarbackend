import { getConnection, querys, sql } from "../database";

exports.updateAP = async (req,res) => {
    try {
        const userID = req.body.userID;
        const point = req.body.point;
        const pool = await getConnection();
        const result = await pool  
            .request()
            .input("UserId", userID)
            .input("Point", point)
            .query(querys.updateAP);
        res.status(200);
        res.send("AP Updated successfully");
    }catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

exports.signIn = async (req,res) => {
    try {
        const userID = req.body.userID;
        const pw = req.body.pw;
        const pool = await getConnection();
        let resp = {}
        const result = await pool  
            .request()
            .input("UserId", userID)
            .input("Pw", pw)
            .query(querys.signIn);
            if(Object.keys(result.recordset).length>0){
                resp = {
                    'userID' : result.recordset[0].UserID,
                    'ap': result.recordset[0].Point,
                }
            }else{
                return res.status(401).json({ msg: "Sign In Failed" });
            }
        res.status(200);
        res.send("Sign In successfully");
        return resp;
    }catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

exports.signUp = async (req,res) => {
    const pool = await getConnection();
    let userFinded = false;
    const userID = req.body.userID;
    const pw = req.body.pw;
    let userUID = 0;
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
    //search is the userId exist
    const searchUser = await pool  
        .request()
        .input("UserId", userID)
        .query(querys.findUser);
    if(Object.keys(searchUser.recordset).length>0){
        userFinded = true;
    }else{
        userFinded = false;
    }
    //count all rows of table, add +1 and assigns to UserUID
    const counter = await pool
        .request()
        .query(querys.countUsers);
    let obj = counter.recordset[0];
    let valueOfOBJ = obj[''];
    let count = parseInt(valueOfOBJ);
    userUID = userUID + count + 1;

    if (userID == null || pw == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }else if(userFinded==true){
        return res.status(401).json({ msg: "User exist in DB" });
    }else{ 
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
                .query(querys.signUp);
                res.status(200);
                res.send("Sign Up successfully");
            } catch (error) {
                res.status(500);
                res.send(error.message);
            }
    } 
}