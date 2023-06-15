import React, { useState, useEffect } from 'react';

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
            <React.Fragment key={animal.id}>
                <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow my-6">
                    <p className="text-black text-center">
                        {animal.animal.name}
                    </p>
                    <p className="text-black text-center">
                        {animal.species[0].species}
                    </p>
                    <p className="text-black text-center">
                    {animal.race[0].race}
                    </p>
                    <p className="text-black text-center">
                    {animal.fell[0].fell}
                    </p>
                </div>
            </React.Fragment>
        ))}
    </>
  );
};

export default PrintOwnersAnimals;