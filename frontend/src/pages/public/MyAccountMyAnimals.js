import React, { useState } from 'react';
import PrintOwnersAnimals from '../../components/public/PrintOwnersAnimals'
import { Link } from 'react-router-dom';

const MyAccountAnimals = () => {
  return(
    <>
      <main className="mx-auto w-full max-w-2xl">
        <h1 className="text-4xl font-black text-white text-center mt-16">Meus Animais</h1>
        <PrintOwnersAnimals />
      </main>
    </>
  );
};

export default MyAccountAnimals;