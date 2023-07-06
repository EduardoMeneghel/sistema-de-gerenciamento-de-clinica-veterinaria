import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteRace } from '../../../utils/animalController';

const RaceTable = () => {
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

  const DeleteRaceById = (id) => {
    DeleteRace(id)
  };

  useEffect(() => {
    fetchRaceData();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Pelo
              </th>
              <th scope="col" className="px-6 py-3">
                Espécie
              </th>
              <th scope="col" className="px-6 py-3">
                Editar
              </th>
              <th scope="col" className="px-6 py-3">
                Excluir
              </th>
            </tr>
          </thead>
          <tbody>
            {raceData.map((race) => (
              <tr className="bg-white hover:bg-gray-50" key={race.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {race.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {race.race}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {race.species_id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <Link className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full py-2">
                    Editar
                  </Link>
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <Link
                    className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-orange-500 to-red-500 w-full py-2"
                    onClick={() => DeleteRaceById(race.id)}
                  >
                    Excluir
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RaceTable;
