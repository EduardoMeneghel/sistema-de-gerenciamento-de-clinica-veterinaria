<!DOCTYPE html>
<html>
<head>
    <title>ADMIN</title>
    <link href="../css/reset.css" rel="stylesheet">
    <link href="../css/login.css" rel="stylesheet">
</head>
<body>
<div class="card card-white center" style="width: 500px;height: 575px; margin-top: 50px; text-align: center;">
    <form action="./validateLogin.php" method="post">
        <img src="./../public/img/user.png" height="200px">
        <input class="input-id" placeholder="USERNAME" style="margin-top: 30px;" type="text" name="username" required>
        <input class="input-password" type="password" placeholder="PASSWORD" style="margin-top: 25px;" type="text" name="password" required>
        <button class="buttom-login" style="margin-top: 25px;" type="submit">LOGIN</button>
        <a class="buttom-register" href="./../admin/register.php" style="margin-top: 25px;">REGISTER</a>
        <a style="margin-top: 15px; color: gray; float: right;" href="./../admin/forgotPassword.php">Forgot password?</a>
        <input type="checkbox" style="margin-top: 15px; float: left;" type="text" name="checkbox">
        <label style="color: gray; float: left; margin-top: 13px; margin-left: 5px;">stay connected</label>
    </form>
</div>
</body>
</html>
