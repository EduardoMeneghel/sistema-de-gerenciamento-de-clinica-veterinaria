import React, { useState, useEffect } from 'react';

const SelectUser = ({ onUserChange }) => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3002/user');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleUserChange = (e) => {
    const selectedUserId = e.target.value;
    onUserChange(selectedUserId);
  };

  return (
    <>
      <div className="relative z-0 w-full mb-6 group">
        <select
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleUserChange}
          required
        >
          <option className="text-black" selected>
            Selecione a espécie
          </option>
          {userData.map((user) => (
            <option className="text-black" value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectUser;
