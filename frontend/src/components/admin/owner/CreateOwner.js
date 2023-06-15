import React, { useState, useEffect } from 'react';
import SelectAnimal from '../animal/SelectAnimal';
import SelectUser from '../user/SelectUser';
import { PostOwner } from '../../../utils/userController';

const CreateOwner = () => {
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedAnimalId, setSelectedAnimalId] = useState('');

  const handleUserChange = (selectedId) => {
    setSelectedUserId(selectedId);
  };

  const handleAnimalChange = (selectedId) => {
    setSelectedAnimalId(selectedId);
  };

  const handleOwnerSubmit = () => {
    if (!selectedAnimalId) {
      alert('Por favor, preencha todos os campos!');
    } else if (!selectedUserId) {
      alert('Por favor, selecione a espécie!');
    } else {
      PostOwner(selectedUserId, selectedAnimalId);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-black text-white text-center mt-16">Dono</h1>
      <div className="relative z-0 w-full mb-6 group">
        <div className="relative z-0 w-full mb-6 group">
        <SelectUser onUserChange={handleUserChange} />
          <label
              htmlFor="raca"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
              Usuário
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
        <SelectAnimal onAnimalChange={handleAnimalChange} />
          <label
              htmlFor="id"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
              Animal
          </label>
        </div>
      </div>
      <a
        href="{{ url('admin/dashboard') }}"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Voltar
      </a>
      <button
        type="submit"
        onClick={handleOwnerSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
      >
        Salvar
      </button>
    </>
  );
};

export default CreateOwner;
