import React from 'react';
import Header from '../../../components/admin/util/Header';

const Order = () => {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-2xl">
            <h1 className="text-4xl font-black text-white text-center mt-16">Pedido</h1>
            <form className="mt-4">
                <div className="relative z-0 w-full mb-6 group">
                    <p className="text-white">Validação</p>
                </div>
            </form>
      </main>
    </>
  );
};

export default Order;