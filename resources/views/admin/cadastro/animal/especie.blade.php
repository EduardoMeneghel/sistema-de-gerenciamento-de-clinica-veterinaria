<!DOCTYPE html>
<html class="bg-slate-900">
<head>
    <title>Espécie</title>
    @vite('resources/css/app.css')
</head>
<body>
@include('admin.util.header')
<main class="mx-auto w-full max-w-2xl">
    <h1 class="text-4xl font-black text-white text-center mt-16">Espécie</h1>
    <form class="mt-4">
        <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="especie" id="especie"
                   class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="especie"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Especie</label>
        </div>
        <a href="{{ url('admin/dashboard') }}"
           class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Voltar</a>
        <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Salvar
        </button>
    </form>
</main>
@vite('node_modules/flowbite/dist/flowbite.min.js')
</body>
</html>
