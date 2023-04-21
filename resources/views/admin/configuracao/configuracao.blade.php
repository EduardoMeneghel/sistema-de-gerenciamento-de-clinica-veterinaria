<!DOCTYPE html>
<html class="bg-slate-900">
<head>
    <title>Configuração</title>
    @vite('resources/css/app.css')
</head>
<body class="h-screen">
@include('admin.util.header')
<section class="container mx-auto mt-16">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="mr-2">
            <button onclick="utils.contato()" id="abaContato" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Contato</button>    
        </li>
        <li class="mr-2">
            <button onclick="utils.cliente()" id="abaCliente" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Cliente</button>
        </li>
        <li class="mr-2">
            <button onclick="utils.pedido()" id="abaPedido" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Pedidos</button>
        </li>
        <li class="mr-2">
            <button onclick="utils.pagamento()" id="abaPagamento" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Pagamento</button>
        </li>
    </ul>
</section>
@include('admin.configuracao.contato')
@include('admin.configuracao.cliente')
@include('admin.configuracao.pedido')
@include('admin.configuracao.pagamento')
@vite('node_modules/flowbite/dist/flowbite.min.js')
@vite('node_modules/chart.js/dist/chart.js')
<script module src="@vite('resources/js/configuracao.js')"></script>
</body>
</html>