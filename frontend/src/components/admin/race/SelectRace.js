import React, { useState, useEffect } from 'react';

const SelectRace = ({ onRaceChange }) => {
  const [raceData, setRaceData] = useState([]);

  const fetchRaceData = async () => {
    try {
      const response = await fetch('http://localhost:3002/animal/race');
      const data = await response.json();
      setRaceData(data);
    } catch (error) {
      console.log('Error fetching race data:', error);
    }
  };

  useEffect(() => {
    fetchRaceData();
  }, []);

  const handleRaceChange = (e) => {
    const selectedRaceId = e.target.value;
    onRaceChange(selectedRaceId);
  };

  return (
    <>
      <div className="relative z-0 w-full mb-6 group">
        <select
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleRaceChange}
          required
        >
          <option className="text-black" selected>
            Selecione a raça
          </option>
          {raceData.map((race) => (
            <option className="text-black" value={race.id} key={race.id}>
              {race.race}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectRace;
