import React, { useState, useEffect } from 'react';

const SelectFell = ({ onFellChange }) => {
  const [fellData, setFellData] = useState([]);

  const fetchFellData = async () => {
    try {
      const response = await fetch('http://localhost:3002/animal/fell');
      const data = await response.json();
      setFellData(data);
    } catch (error) {
      console.log('Error fetching fell data:', error);
    }
  };

  useEffect(() => {
    fetchFellData();
  }, []);

  const handleFellChange = (e) => {
    const selectedFellId = e.target.value;
    onFellChange(selectedFellId);
  };

  return (
    <>
      <div className="relative z-0 w-full mb-6 group">
        <select
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleFellChange}
          required
        >
          <option className="text-black" selected>
            Selecione o pelo
          </option>
          {fellData.map((fell) => (
            <option className="text-black" value={fell.id} key={fell.id}>
              {fell.fell}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectFell;
