import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../util/Header';

export const Configuration = () => {
  const location = useLocation();

  return (
    <>
        <Header />
        <section className="container mx-auto mt-16">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <li className={`${location.pathname.includes('/configuration/contact') ? 'inline-block text-blue-600 bg-gray-100 rounded-t-lg active' : 'inline-block rounded-t-lg hover:text-gray-600 hover:bg-gray-50'}`}>
            <Link to="../admin/configuration/contact" className="inline-block p-4 rounded-t-lg">Contato</Link>
            </li>
            <li className={`${location.pathname.includes('/configuration/client') ? 'inline-block text-blue-600 bg-gray-100 rounded-t-lg active' : 'inline-block rounded-t-lg hover:text-gray-600 hover:bg-gray-50'}`}>
            <Link to="../admin/configuration/client" className="inline-block p-4 rounded-t-lg">Cliente</Link>
            </li>
            <li className={`${location.pathname.includes('/configuration/order') ? 'inline-block text-blue-600 bg-gray-100 rounded-t-lg active' : 'inline-block rounded-t-lg hover:text-gray-600 hover:bg-gray-50'}`}>
            <Link to="../admin/configuration/order" className="inline-block p-4 rounded-t-lg">Pedidos</Link>
            </li>
            <li className={`${location.pathname.includes('/configuration/payment') ? 'inline-block text-blue-600 bg-gray-100 rounded-t-lg active' : 'inline-block rounded-t-lg hover:text-gray-600 hover:bg-gray-50'}`}>
            <Link to="../admin/configuration/payment" className="inline-block p-4 rounded-t-lg">Pagamento</Link>
            </li>
        </ul>
        </section>
    </>
  );
};

export default Configuration;
