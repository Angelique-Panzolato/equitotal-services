// FICHIER : App.jsx

import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages Publiques
import LandingPage from './features/authLanding/LandingPage';
import LivretInfo from './features/authLanding/LivretInfo';
import Aide from './features/authLanding/aide';
import Conditions from './features/authLanding/conditions';
import Login from './features/authLanding/Login';
import Register from './features/authLanding/Register';

// MODULES DASHBOARDS
import Proprietaires from './modules/dashboards/Proprietaires';
import Prestataires from './modules/dashboards/Prestataires';
import Institutions from './modules/dashboards/Institutions';

// LIVRET NUMERIQUE (plein écran)
import LivretNumerique from './modules/equiPass/Livret/LivretNumerique';

// Admin
import ProtectedAdmin from './admin/protectedadmin';
import AdminLayout from './admin/components/adminLayout';
import Admin from './admin/dashboard/admin';
import Users from './admin/users/users';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAuthenticated") === "true");
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <Routes>

      {/* LIVRET NUMERIQUE — EN DEHORS DU LAYOUT */}
      <Route path="/livret-numerique" element={<LivretNumerique />} />

      {/* TOUT LE RESTE GARDE LE LAYOUT */}
      <Route
        path="*"
        element={
          <div className={`app-container ${isAdminPage ? 'admin-page' : ''}`}>
            {!isAdminPage && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}

            <main className="main-content">
              <Routes>
                {/* Routes Publiques */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/livret" element={<LivretInfo />} />
                <Route path="/aide" element={<Aide />} />
                <Route path="/conditions" element={<Conditions />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Dashboards */}
                <Route path="/proprietaires" element={<Proprietaires />} />
                <Route path="/prestataires" element={<Prestataires />} />
                <Route path="/institutions" element={<Institutions />} />

                {/* Admin */}
                <Route path="/admin" element={
                  <ProtectedAdmin>
                    <AdminLayout onLogout={handleLogout}>
                      <Admin />
                    </AdminLayout>
                  </ProtectedAdmin>
                } />

                <Route path="/admin/users" element={
                  <ProtectedAdmin>
                    <AdminLayout onLogout={handleLogout}>
                      <Users />
                    </AdminLayout>
                  </ProtectedAdmin>
                } />

                {/* 404 */}
                <Route path="*" element={<h1>Erreur 404 : Page introuvable</h1>} />
              </Routes>
            </main>
          </div>
        }
      />

    </Routes>
  );
}

export default App;
