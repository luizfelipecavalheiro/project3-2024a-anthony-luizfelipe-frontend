import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import DashboardUsuario from './pages/DashboardUsuario.jsx';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/dashboard-usuario" element={<DashboardUsuario />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
