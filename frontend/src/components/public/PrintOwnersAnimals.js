import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrintOwnersAnimals = () => {
  const [animalsData, setAnimalsData] = useState([]);
 
  const fetchAnimalsData = async () => {
    try {
        const response = await fetch('http://localhost:3002/owner/user/9');
        const data = await response.json();
        setAnimalsData(data);
      } catch (error) {
        console.log('Error fetching species data:', error);
      }
  };

  useEffect(() => {
    fetchAnimalsData();
  }, []);

  return (
    <>
       {animalsData.map(animal => (
            <React.Fragment key={animal.animal.id}>
                <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow my-6">
                    <p className="text-black text-center">
                        Nome : {animal.animal.name}
                    </p>
                    <p className="text-black text-center">
                        Espécie : {animal.species[0].species}
                    </p>
                    <p className="text-black text-center">
                        Raça : {animal.race[0].race}
                    </p>
                    <p className="text-black text-center">
                        Pelo : {animal.fell[0].fell}
                    </p>
                    <Link
                    to={"../my-account/animal/"+animal.animal.id}
                    className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
                    >
                    Ver Animal
                    </Link>
                </div>
            </React.Fragment>
        ))}
    </>
  );
};

export default PrintOwnersAnimals;