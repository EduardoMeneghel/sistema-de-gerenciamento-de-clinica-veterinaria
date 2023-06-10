import React from 'react';

const Order = () => {
  return (
    <main className="container mx-auto mt-16">
      <div className="h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3">
                  Forma de Pagamento
                </th>
                <th scope="col" className="px-6 py-3">
                  Preço
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  CODIGO-2
                </th>
                <td className="px-6 py-4">
                  Eduardo Meneghel
                </td>
                <td className="px-6 py-4">
                  Pix
                </td>
                <td className="px-6 py-4">
                  R$ 2999.00
                </td>
                <td className="px-6 py-4">
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1" selected>Pago</option>
                    <option value="2">Aguardando Pagamento</option>
                    <option value="3">Enviado</option>
                    <option value="4">Entregue</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  CODIGO-1
                </th>
                <td className="px-6 py-4">
                  Cliente Teste
                </td>
                <td className="px-6 py-4">
                  Boleto
                </td>
                <td className="px-6 py-4">
                  R$ 1999.00
                </td>
                <td className="px-6 py-4">
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1">Pago</option>
                    <option value="2" selected>Aguardando Pagamento</option>
                    <option value="3">Enviado</option>
                    <option value="4">Entregue</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Order;
