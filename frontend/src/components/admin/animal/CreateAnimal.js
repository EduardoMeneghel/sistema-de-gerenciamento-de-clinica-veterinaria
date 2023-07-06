import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectSpecies from '../species/SelectSpecies';
import SelectRace from '../race/SelectRace';
import SelectFell from '../fell/SelectFell';
import { PostAnimal } from '../../../utils/animalController';

const CreateAnimal = () => {
  const [nameAnimal, setNameAnimal] = useState('');
  const [selectedSpeciesId, setSelectedSpeciesId] = useState('');
  const [selectedRaceId, setSelectedRaceId] = useState('');
  const [selectedFellId, setSelectedFellId] = useState('');
  const [selectedGenderId, setSelectedGenderId] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (e) => {
    setNameAnimal(e.target.value);
  };

  const handleSpeciesChange = (selectedId) => {
    setSelectedSpeciesId(selectedId);
  };

  const handleRaceChange = (selectedId) => {
    setSelectedRaceId(selectedId);
  };

  const handleFellChange = (selectedId) => {
    setSelectedFellId(selectedId);
  };

  const handleGenderChange = (e) => {
    setSelectedGenderId(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAnimalSubmit = () => {
      PostAnimal(nameAnimal, selectedSpeciesId, selectedRaceId, selectedFellId, selectedGenderId, date);
  };

  return (
    <>
      <main className="mx-auto w-full max-w-2xl">
        <h1 className="text-4xl font-black text-white text-center mt-16">Animal</h1>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={nameAnimal}
              onChange={handleNameChange}
            />
            <label
              htmlFor="nome"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nome
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <SelectSpecies onSpeciesChange={handleSpeciesChange} />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <SelectRace onRaceChange={handleRaceChange} />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <SelectFell onFellChange={handleFellChange} />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              value={selectedGenderId}
              onChange={handleGenderChange}
            >
              <option className="text-black">
                Selecione o gênero
              </option>
              <option className="text-black" value="1">
                Macho
              </option>
              <option className="text-black" value="2">
                Fêmea
              </option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Data de nascimento aproximada"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <Link to="/admin/dashboard" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Voltar</Link>
          <button
            onClick={handleAnimalSubmit}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-2"
          >
            Salvar
          </button>
      </main>
    </>
  );
};

export default CreateAnimal;