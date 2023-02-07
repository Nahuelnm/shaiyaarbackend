exports.querys = {
    signUp:"IF NOT EXISTS (SELECT UserID FROM [PS_UserData].[dbo].[Users_Master] WHERE UserID=@userID) INSERT INTO [PS_UserData].[dbo].[Users_Master] (UserUID, UserID, Pw, JoinDate, Admin, AdminLevel, UseQueue, Status, Leave, LeaveDate, Usertype, UserIp, ModiIp, ModiDate, Point, Enpassword, Birth) VALUES (@userUID, @userID, @pw, @joinDate, @admin, @adminLevel, @useQueue, @status, @leave, @leaveDate, @usertype, @userIp, @modiIp, @modiDate, @point, @enpassword, @birth);",
    signIn:"SELECT UserID, Pw, Point FROM [PS_UserData].[dbo].[Users_Master] WHERE UserID=@userID AND Pw = @pw",
    findUser:"SELECT UserID FROM [PS_UserData].[dbo].[Users_Master] WHERE UserID=@userID ",
    countUsers:"SELECT COUNT(*) FROM Users_Master",
    addNewItem:"",
    addPoints:""
};