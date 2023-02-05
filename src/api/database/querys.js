exports.querys = {
    getUserpassword: "SELECT Pw FROM User_Masters Where UserID = @userid ",
    addNewUser:"IF NOT EXISTS (SELECT UserID FROM [PS_UserData].[dbo].[Users_Master] WHERE UserID=@userID) INSERT INTO [PS_UserData].[dbo].[Users_Master] (UserUID, UserID, Pw, JoinDate, Admin, AdminLevel, UseQueue, Status, Leave, LeaveDate, Usertype, UserIp, ModiIp, ModiDate, Point, Enpassword, Birth) VALUES (@userUID, @userID, @pw, @joinDate, @admin, @adminLevel, @useQueue, @status, @leave, @leaveDate, @usertype, @userIp, @modiIp, @modiDate, @point, @enpassword, @birth);",
    countUsers:"SELECT COUNT(*) FROM Users_Master",
    findUser:"SELECT UserID FROM [PS_UserData].[dbo].[Users_Master] WHERE UserID=@userID ",
    addNewItem:"",
    addPoints:""
};