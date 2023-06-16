import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return(
    <>
      <main className="mx-auto w-full max-w-2xl">
        <h1 className="text-4xl font-black text-white text-center mt-16">Minha Conta</h1>
        <Link
        to="../my-account/animals"
        className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
        >
        Ver Meus animais
        </Link>
      </main>
    </>
  );
};

export default MyAccount;