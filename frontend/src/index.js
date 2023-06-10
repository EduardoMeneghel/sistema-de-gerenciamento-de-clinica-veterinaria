import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RecoverPassword from './components/RecoverPassword';
import Order from './components/admin/order/Order';
import Financial from './components/admin/financial/Financial';
import Client from './components/admin/configuration/Client';
import Contact from './components/admin/configuration/Contact';
import Payment from './components/admin/configuration/Payment';
import Orders from './components/admin/configuration/Order';
import Veterinarian from './components/admin/cadastro/veterinarian/Veterinarian';

ReactDOM.render(
  <Router>
    <Routes>

      //Register
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover-password" element={<RecoverPassword />} />

      //Admin
      <Route path="/admin/order" element={<Order />} />
      <Route path="/admin/financial" element={<Financial />} />

        //Configurations
        <Route path="/admin/configuration/client" element={<Client />} />
        <Route path="/admin/configuration/contact" element={<Contact />} />
        <Route path="/admin/configuration/payment" element={<Payment />} />
        <Route path="/admin/configuration/order" element={<Orders />} />

        <Route path="/admin/configuration/veterinarian" element={<Veterinarian />} />

    </Routes>
  </Router>,
  document.getElementById('root')
);
