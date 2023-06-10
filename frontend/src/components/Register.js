import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const Register = () => {
  return (
    <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow my-12">
      <img src={user} alt="User" height="500px" />
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="USERNAME" type="text" name="username" required />
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="FULL NAME" type="text" name="fullname" required />
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" type="date" name="dateofbirth" required />
      <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" name="gender" required>
        <option value="male">Male</option>
        <option value="feminine">Feminine</option>
      </select>
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="EMAIL" type="email" name="email" required />
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="TELEPHONE" type="tel" name="telephone" required />
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="PASSWORD" type="password" name="password" required />
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5" placeholder="CONFIRM PASSWORD" type="password" name="confirmpassword" required />
      <button type="submit" className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">REGISTRAR-SE</button>
      <Link to="/login" className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5">VOLTAR</Link>
    </div>
  );
};

export default Register;
