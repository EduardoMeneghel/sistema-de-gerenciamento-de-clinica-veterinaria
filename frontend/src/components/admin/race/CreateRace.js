import React, { useState, useEffect } from 'react';
import { PostRace } from '../../../utils/animalController';
import SelectSpecies from '../species/SelectSpecies';

const CreateRace = () => {
  const [race, setRace] = useState('');
  const [selectedSpeciesId, setSelectedSpeciesId] = useState('');

  const handleRaceChange = (e) => {
    setRace(e.target.value);
  };

  const handleSpeciesChange = (selectedId) => {
    setSelectedSpeciesId(selectedId);
  };

  const handleRaceSubmit = () => {
    if (!race) {
      alert('Por favor, preencha todos os campos!');
    } else if (!selectedSpeciesId) {
      alert('Por favor, selecione a espécie!');
    } else {
      PostRace(race, selectedSpeciesId);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-black text-white text-center mt-16">Raça</h1>
      <div className="relative z-0 w-full mb-6 group">
        <SelectSpecies onSpeciesChange={handleSpeciesChange} />
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="raca"
            id="raca"
            value={race}
            onChange={handleRaceChange}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="raca"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Raça
          </label>
        </div>
      </div>
      <a
        href="{{ url('admin/dashboard') }}"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Voltar
      </a>
      <button
        type="submit"
        onClick={handleRaceSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-2"
      >
        Salvar
      </button>
    </>
  );
};

export default CreateRace;
