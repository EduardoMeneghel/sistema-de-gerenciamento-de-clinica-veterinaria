<!DOCTYPE html>
<html class="bg-slate-900">
    <head>
        <title>Registro</title>
        @vite('resources/css/app.css')
    </head>
    <body class="max-w-lg mx-auto mt-32">
        <div class="mx-auto max-w-sm p-6 bg-white rounded-lg shadow">
            <img src="{{asset('user.png')}}" height="500px">
            <input class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="USERNAME" type="text" name="username" required>
            <input class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="FULL NAME" type="text" name="fullname" required>
            <input class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" type="date" name="dateofbirth" required>
            <select class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" name="gender" required>
                <option value="male">Male</option>
                <option value="feminine">Feminine</option>
            </select>
            <input class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="EMAIL" type="email" name="email" required>
            <input class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="TELEPHONE" type="tel" name="telephone" required>
            <input class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="PASSWORD" type="password" name="password" required>
            <input class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="CONFIRM PASSWORD" type="password" name="confirmpassword" required>
            <a type="button" class="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">REGISTRAR-SE</a>
            <a href="{{ url('login') }}" class="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">VOLTAR</a>
        </div>
    </body>
</html>

