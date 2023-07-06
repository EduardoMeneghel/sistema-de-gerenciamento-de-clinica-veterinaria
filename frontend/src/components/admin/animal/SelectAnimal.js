import React, { useState, useEffect } from 'react';

const SelectAnimal = ({ onAnimalChange }) => {
  const [animalData, setAnimalData] = useState([]);

  const fetchAnimalData = async () => {
    try {
      const response = await fetch('http://localhost:3002/animal');
      const data = await response.json();
      setAnimalData(data);
    } catch (error) {
      console.log('Error fetching animal data:', error);
    }
  };

  useEffect(() => {
    fetchAnimalData();
  }, []);

  const handleAnimalChange = (e) => {
    const selectedAnimalId = e.target.value;
    onAnimalChange(selectedAnimalId);
  };

  return (
    <>
      <div className="relative z-0 w-full mb-6 group">
        <select
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleAnimalChange}
          required
        >
          <option className="text-black" selected>
            Selecione a espécie
          </option>
          {animalData.map((animal) => (
            <option className="text-black" value={animal.id} key={animal.id}>
              {animal.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectAnimal;
