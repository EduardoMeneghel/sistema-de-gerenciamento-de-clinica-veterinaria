<!DOCTYPE html>
<html>
<head>
    <title>ADMIN</title>
    <link rel="stylesheet" href="{{asset('css/reset.css')}}">
    <link rel="stylesheet" href="{{asset('css/login.css')}}">
</head>
<body>
<div class="card card-white centro" style="width: 500px;height: 1000px; margin-top: 50px; margin-bottom: 50px; text-align: center;">
    <form action="./validateRegister.php" method="post">
        <img src="{{asset('user.png')}}" height="200px">
        <input class="input" placeholder="USERNAME" style="margin-top: 30px;" type="text" name="username" required>
        <input class="input" placeholder="FULL NAME" style="margin-top: 30px;" type="text" name="fullname" required>
        <input class="input" style="margin-top: 30px;" type="date" name="dateofbirth" required>
        <select class="input" style="margin-top: 30px; width: 100%;" name="gender" required>
            <option value="male">Male</option>
            <option value="feminine">Feminine</option>
        </select>
        <input class="input" placeholder="EMAIL" style="margin-top: 30px;" type="email" name="email" required>
        <input class="input" placeholder="TELEPHONE" style="margin-top: 30px;" type="tel" name="telephone" required>
        <input class="input-password" placeholder="PASSWORD" type="password" style="margin-top: 25px;" type="text" name="password" required>
        <input class="input-password" placeholder="CONFIRM PASSWORD" type="password" style="margin-top: 25px;" type="text" name="confirmpassword" required>
        <button class="buttom-register" style="margin-top: 25px;" type="submit">REGISTRAR-SE</button>
        <a class="buttom-go-to-back" href="{{ url('login') }}" style="margin-top: 25px;">VOLTAR</a>
    </form>
</div>
</body>
</html>
