import React, { useState } from 'react';
import PrintOwnersAnimals from '../../components/public/PrintOwnersAnimals'

const MyAccount = () => {
  return(
    <>
      <main className="mx-auto w-full max-w-2xl">
        <h1 className="text-4xl font-black text-white text-center mt-16">Minha Conta</h1>
        <PrintOwnersAnimals />
      </main>
    </>
  );
};

export default MyAccount;