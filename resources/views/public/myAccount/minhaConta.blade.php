<!DOCTYPE html>
<html class="bg-slate-900">
    <head>
        <title>Minha Conta</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        @include('public.util.header')
        <section class="container mx-auto mt-16">
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="mr-2">
                    <button onclick="utils.perfil()" id="abaPerfil" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Perfil</button>    
                </li>
                <li class="mr-2">
                    <button onclick="utils.endereco()" id="abaEndereco" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Endereço</button>
                </li>
                <li class="mr-2">
                    <button onclick="utils.pedidos()" id="abaPedidos" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Pedidos</button>
                </li>
                <li class="mr-2">
                    <button onclick="utils.animais()" id="abaAnimais" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Animais</button>
                </li>
                <li class="mr-2">
                    <button onclick="utils.sair()" id="abaSair" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Sair</button>
                </li>
            </ul>
        </section>
        @include('public.myAccount.perfil')
        @include('public.myAccount.endereco')
        @include('public.myAccount.pedidos')
        @include('public.myAccount.animais')
        @vite('node_modules/flowbite/dist/flowbite.min.js')
        <script module src="@vite('resources/js/minhaConta.js')"></script>
    </body>
</html>
