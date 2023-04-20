<!DOCTYPE html>
<html class="bg-slate-900">
<head>
    <title>Configuração</title>
    @vite('resources/css/app.css')
</head>
<body>
@include('admin.util.header')
<main class="container mx-auto mt-16">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="mr-2">
            <a href="#" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Contato</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Cliente</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Pedidos</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Pagamento</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Pagamento</a>
        </li>
    </ul>
</main>
@vite('node_modules/flowbite/dist/flowbite.min.js')
@vite('node_modules/chart.js/dist/chart.js')
</body>
</html>
