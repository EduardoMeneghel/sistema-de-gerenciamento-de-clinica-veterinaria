import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Register
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import RecoverPassword from './pages/public/RecoverPassword';

//Admin
import Dashboard from './pages/admin/Dashboard';
import AdminLogin from './pages/admin/Login'
import Order from './pages/admin/order/Order';
import Financial from './pages/admin/financial/Financial';
import Document from './pages/admin/document/Document'

//Configuration
import ClientConfiguration from './pages/admin/configuration/Client';
import ContactConfiguration from './pages/admin/configuration/Contact';
import PaymentConfiguration from './pages/admin/configuration/Payment';
import OrdersConfiguration from './pages/admin/configuration/Order';

//Register Admin
//import ExamRegister from './pages/admin/'
//import ClientRegister from './pages/admin/client/Client'
//import VaccineRegister from './pages/admin/vaccine/Vaccine'
//import VeterinarianRegister from './pages/admin/veterinarian/Veterinarian'
//import ClinicalFollowUpFormRegister from './pages/admin/document/ClinicalFollowUpForm'
import AnimalRegister from './pages/admin/animal/Animal'
import SpeciesRegister from './pages/admin/animal/Species'
import FellRegister from './pages/admin/animal/Fell'
import RaceRegister from './pages/admin/animal/Race'


//Not Found
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>

      {/*Register*/}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover-password" element={<RecoverPassword />} />

      {/*Admin*/}
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/order" element={<Order />} />
      <Route path="/admin/financial" element={<Financial />} />
      <Route path="/admin/document" element={<Document />} />

        {/*Configurations*/}
        <Route path="/admin/configuration/client" element={<ClientConfiguration />} />
        <Route path="/admin/configuration/contact" element={<ContactConfiguration />} />
        <Route path="/admin/configuration/payment" element={<PaymentConfiguration />} />
        <Route path="/admin/configuration/order" element={<OrdersConfiguration />} />

        {/*Register Admin*/}
        {/*<Route path="/admin/register/exam" element={<ExamRegister />} />
        <Route path="/admin/register/client" element={<ClientRegister />} />
        <Route path="/admin/register/vaccine" element={<VaccineRegister />} />
<Route path="/admin/register/document/clinical-follow-up-form" element={<ClinicalFollowUpFormRegister />} />
        <Route path="/admin/register/veterinarian" element={<VeterinarianRegister />} />*/}

        <Route path="/admin/animal" element={<AnimalRegister />} />
          <Route path="/admin/animal/species" element={<SpeciesRegister />} />
          <Route path="/admin/animal/fell" element={<FellRegister />} />
          <Route path="/admin/animal/race" element={<RaceRegister />} />

        <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
