import React, { useState, useEffect } from 'react';

const SelectSpecies = ({ onSpeciesChange }) => {
  const [speciesData, setSpeciesData] = useState([]);

  const fetchSpeciesData = async () => {
    try {
      const response = await fetch('http://localhost:3002/animal/species');
      const data = await response.json();
      setSpeciesData(data);
    } catch (error) {
      console.log('Error fetching species data:', error);
    }
  };

  useEffect(() => {
    fetchSpeciesData();
  }, []);

  const handleSpeciesChange = (e) => {
    const selectedSpeciesId = e.target.value;
    onSpeciesChange(selectedSpeciesId);
  };

  return (
    <>
      <div className="relative z-0 w-full mb-6 group">
        <select
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleSpeciesChange}
          required
        >
          <option className="text-black" selected>
            Selecione a espécie
          </option>
          {speciesData.map((species) => (
            <option className="text-black" value={species.id} key={species.id}>
              {species.species}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectSpecies;
