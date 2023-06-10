import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const RecoverPassword = () => {
  return (
    <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow my-12">
        <img src={user} alt="User" height="500px" />
        <input type="text" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="Email" required />
        <Link className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5" to="/recover-account">Recuperar conta</Link>
        <Link to="/login" className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">Voltar</Link>
    </div>
  );
};

export default RecoverPassword;