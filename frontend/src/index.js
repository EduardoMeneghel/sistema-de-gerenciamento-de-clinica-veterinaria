import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Register
import Login from './pages/public/Login';
import RegisterForm from './pages/public/Register';
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
import ExamRegister from './pages/admin/register/exam/Exam'
import ClientRegister from './pages/admin/register/client/Client'
import VaccineRegister from './pages/admin/register/vaccine/Vaccine'
import VeterinarianRegister from './pages/admin/register/veterinarian/Veterinarian'
import ClinicalFollowUpFormRegister from './pages/admin/register/document/ClinicalFollowUpForm'
import AnimalRegister from './pages/admin/register/animal/Animal'
import SpeciesRegister from './pages/admin/register/animal/Species'
import FellRegister from './pages/admin/register/animal/Fell'
import RaceRegister from './pages/admin/register/animal/Race'


//Not Found
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Router>
    <Routes>

      {/*Register*/}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterForm />} />
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
        <Route path="/admin/register/exam" element={<ExamRegister />} />
        <Route path="/admin/register/client" element={<ClientRegister />} />
        <Route path="/admin/register/animal" element={<AnimalRegister />} />
        <Route path="/admin/register/vaccine" element={<VaccineRegister />} />
        <Route path="/admin/register/document/clinical-follow-up-form" element={<ClinicalFollowUpFormRegister />} />
        <Route path="/admin/register/veterinarian" element={<VeterinarianRegister />} />
          <Route path="/admin/register/animal/species" element={<SpeciesRegister />} />
          <Route path="/admin/register/animal/fell" element={<FellRegister />} />
          <Route path="/admin/register/animal/race" element={<RaceRegister />} />

        <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
