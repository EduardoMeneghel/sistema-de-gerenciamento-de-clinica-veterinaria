import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteSpecies } from '../../../utils/animalController';

const SpeciesTable = () => {
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

  const DeleteSpeciesById = (id) => {
    DeleteSpecies(id)
  };

  useEffect(() => {
    fetchSpeciesData();
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
            {speciesData.map((species) => (
              <tr className="bg-white hover:bg-gray-50" key={species.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {species.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {species.species}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <Link className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full py-2">
                    Editar
                  </Link>
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <Link
                    className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-orange-500 to-red-500 w-full py-2"
                    onClick={() => DeleteSpeciesById(species.id)}
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

export default SpeciesTable;
