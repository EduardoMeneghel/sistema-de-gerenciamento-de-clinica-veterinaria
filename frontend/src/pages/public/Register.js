import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { PostRegister } from '../../utils/userController';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;

    if (! fullname || ! dateOfBirth || ! gender || ! email || ! telephone || ! password || ! confirmPassword) {
      alert("Por favor preencha todos os campos!");
    } else if (!emailRegex.test(email)) {
      alert('O email fornecido é inválido.');
    }else if (!phoneRegex.test(telephone)) {
      alert('O número de telefone fornecido é inválido.');
    } else {
      PostRegister(fullname, dateOfBirth, gender, email, telephone, password, confirmPassword)
    }
  };

  return (
    <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow my-12">
      <img src={logo} alt="logo" height="500px" />
      <input
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        placeholder="Nome completo"
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required
      />
      <input
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
      />
      <select
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="1">Masculino</option>
        <option value="2">Feminino</option>
      </select>
      <input
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        placeholder="Telefone"
        type="tel"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        required
      />
      <input
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
        placeholder="Confirma senha"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button
        className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
        onClick={handleRegister}
      >
        REGISTRAR-SE
      </button>
      <Link
        to="/login"
        className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
      >
        VOLTAR
      </Link>
    </div>
  );
};

export default Register;
