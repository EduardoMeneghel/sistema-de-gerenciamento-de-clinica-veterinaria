import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostSpecies } from '../../../utils/animalController';

const CreateSpecies = () => {
  const [species, setSpecies] = useState('');

  const handleSpecies = () => {
    if (!species) {
      alert('Por favor, preencha todos os campos!');
    } else {
      PostSpecies(species);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-black text-white text-center mt-16">Espécie</h1>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="especie"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Espécie
        </label>
      </div>
      <Link
        to="../admin/dashboard"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Voltar
      </Link>
      <Link
        type="submit"
        onClick={handleSpecies}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
      >
        Salvar
      </Link>
    </>
  );
};

export default CreateSpecies;
