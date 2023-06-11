import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { PostLogin } from '../../utils/userController';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (! email, ! password) {
      alert("Por favor preencha todos os campos!")
    }else {
      PostLogin(email, password)
    }
  };

  return (
    <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow my-12">
      <img src={logo} alt="logo" height="500px" />
      <input
        type="text"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        placeholder="Login"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Link
        className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
        onClick={handleLogin}
      >
        Entrar
      </Link>
      <Link
        to="/register"
        className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
      >
        Registrar-se
      </Link>
      <Link to="/recover-password" className="mt-2.5">
        Esqueci minha conta
      </Link>
    </div>
  );
};

export default Login;