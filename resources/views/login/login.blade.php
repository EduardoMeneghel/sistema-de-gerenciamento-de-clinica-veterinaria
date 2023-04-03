<!DOCTYPE html>
<html class="bg-slate-900">
    <head>
        <title>Login</title>
        @vite('resources/css/app.css')
    </head>
    <body class="max-w-lg mx-auto mt-32">
        <div class="mx-auto max-w-sm p-6 bg-white rounded-lg shadow">
            <img src="{{asset('user.png')}}" height="500px">
            <input type="text" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="Login" required>
            <input type="password" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="Senha" required>
            <a class="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">Entrar</a>
            <a href="{{ url('registro') }}" class="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">Registrar-se</a>
            <a href="{{ url('recuperar-senha') }}" class="mt-2.5">Esqueci minha conta</a>
        </div>
    </body>
</html>