import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import de tes pages
import LandingPage from './features/authLanding/LandingPage';
import LivretInfo from './features/authLanding/LivretInfo';
import HorseList from './features/livretNumerique/HorseList';
import Aide from './features/authLanding/aide';
import Conditions from './features/authLanding/conditions';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<LandingPage />} />

          {/* Route pour la page d'information sur le livret */}
          <Route path="/livret" element={<LivretInfo />} />

          {/* Route pour la page d'aide */}
          <Route path="/aide" element={<Aide />} />

          {/* Route pour les conditions d'utilisation */}
          <Route path="/conditions" element={<Conditions />} />

          {/* Route pour la liste des chevaux */}
          <Route path="/chevaux" element={<HorseList />} />

          {/* Tu pourras ajouter ici tes futures routes comme /login ou /register */}
        </Routes>

      <Footer />
      </div>
    </Router>
  );
}

export default App;