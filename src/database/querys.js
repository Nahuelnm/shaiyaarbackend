export const querys = {
    getUserpassword: "SELECT Pw FROM User_Masters Where UserID = @userid ",
    addNewUser:"INSERT INTO [PS_UserData].[dbo].[Users_Master] (UserUID, UserID, Pw, JoinDate, Admin, AdminLevel, UseQueue, Status, Leave, LeaveDate, Usertype, UserIp, ModiIp, ModiDate, Point, Enpassword, Birth) VALUES (@userUID, @userID, @pw, @joinDate, @admin, @adminLevel, @useQueue, @status, @leave, @leaveDate, @usertype, @userIp, @modiIp, @modiDate, @point, @enpassword, @birth);",
    countUsers:"SELECT COUNT(*) FROM Users_Master",
    addNewItem:"",
    addPoints:""
};

