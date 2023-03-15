<!DOCTYPE html>
<html>
<head>
    <title>ADMIN</title>
    <link rel="stylesheet" href="{{asset('css/reset.css')}}">
    <link rel="stylesheet" href="{{asset('css/login.css')}}">
</head>
<body>
<div class="card card-white centro" style="width: 500px;height: 450px; margin-top: 50px; text-align: center;">
    <form action="./validateForgotPassword.php" method="post">
        <img src="{{asset('user.png')}}" height="200px">
        <input class="input" placeholder="EMAIL" style="margin-top: 30px;" type="email" name="email" required>
        <button class="buttom-forgot-password" style="margin-top: 25px;" type="submit">RECUPERAR CONTA</button>
        <a class="buttom-go-to-back" href="{{ url('login') }}" style="margin-top: 25px;">VOLTAR</a>
    </form>
</div>
</body>
</html>
