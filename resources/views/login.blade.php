<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="{{asset('css/reset.css')}}">
    <link rel="stylesheet" href="{{asset('css/login.css')}}">
</head>
<body>
<div class="card card-white centro" style="width: 500px;height: 575px; margin-top: 50px; text-align: center;">
    <form action="./validateLogin.php" method="post">
        <img src="{{asset('user.png')}}" height="200px">
        <input class="input" placeholder="USERNAME" style="margin-top: 30px;" type="text" name="username" required>
        <input class="input-password" type="password" placeholder="PASSWORD" style="margin-top: 25px;" type="text" name="password" required>
        <button class="buttom-login" style="margin-top: 25px;" type="submit">LOGAR</button>
        <a class="buttom-register" href="{{ url('registro') }}" style="margin-top: 25px;">REGISTRAR</a>
        <a style="margin-top: 15px; color: gray; float: right;" href="{{ url('recuperar-senha') }}">Esuqeci minha conta</a>
        <input type="checkbox" style="margin-top: 15px; float: left;" type="text" name="checkbox">
        <label style="color: gray; float: left; margin-top: 13px; margin-left: 5px;">stay connected</label>
    </form>
</div>
</body>
</html>
