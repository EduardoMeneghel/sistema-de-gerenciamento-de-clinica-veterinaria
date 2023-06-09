import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Login = () => {
  return (
    <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow my-12">
      <img src={logo} alt="logo" height="500px" />
      <input type="text" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="Login" required />
      <input type="password" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="Senha" required />
      <Link to="/" className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">Entrar</Link>
    </div>
  );
};

export default Login;