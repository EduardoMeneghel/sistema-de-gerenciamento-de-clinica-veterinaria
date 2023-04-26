<!DOCTYPE html>
    <html class="bg-slate-900">
        <head>
            <title>Pedido</title>
            @vite('resources/css/app.css')
        </head>
        <body class="h-screen">
        @include('admin.util.header')
        <main class="container mx-auto mt-16">
            <div class="h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Código
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Cliente
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Forma de Pagamento
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Preço
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    CODIGO-2
                                </th>
                                <td class="px-6 py-4">
                                    Eduardo Meneghel
                                </td>
                                <td class="px-6 py-4">
                                    Pix
                                </td>
                                <td class="px-6 py-4">
                                    R$ 2999.00
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="1" selected>Pago</option>
                                        <option value="2">Aguardando Pagamanto</option>
                                        <option value="3">Enviardo</option>
                                        <option value="4">Entrege</option>
                                    </select>
                                </td>
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    CODIGO-1
                                </th>
                                <td class="px-6 py-4">
                                    Cliente Teste
                                </td>
                                <td class="px-6 py-4">
                                    Boleto
                                </td>
                                <td class="px-6 py-4">
                                    R$ 1999.00
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="1">Pago</option>
                                        <option value="2" selected>Aguardando Pagamanto</option>
                                        <option value="3">Enviardo</option>
                                        <option value="4">Entrege</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        @vite('node_modules/flowbite/dist/flowbite.min.js')
        @vite('node_modules/chart.js/dist/chart.js')
        </body>
</html>