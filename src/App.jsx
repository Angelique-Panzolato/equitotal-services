import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages globales
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Logout from "./pages/logout";
import LivretInfo from "./pages/livret-info";
import Aide from "./pages/aide";

// pages Chevaux (Espace utilisateur)
import Chevaux from "./pages/chevaux"; 
import ChevalProfil from "./pages/cheval-profil";

// Pages Prestataires (Espace utilisateur)
import Prestataires from "./pages/prestataires";

// Admin
import Admin from "./admin/admin";
import Users from "./admin/users";
import ProtectedAdmin from "./components/protectedadmin";

// Module Livret
import LivretLayout from "./modules/livret/layouts/livretlayout";
import Overview from "./modules/livret/pages/overview";
import Sante from "./modules/livret/pages/sante";
import Alimentation from "./modules/livret/pages/alimentation";
import Entrainement from "./modules/livret/pages/entrainement";
import Documents from "./modules/livret/pages/documents";
import Galerie from "./modules/livret/pages/galerie";
import UserEdit from "./admin/useredit";
import UserDetails from "./admin/userdetails";

// Pages Livret numérique
import LivretNumerique from "./pages/livret-numerique";

import Header from "./components/header";

function App() {
  const location = useLocation();

  // Pages où le header doit être caché
  const hideHeaderOn = ["/", "/login", "/register"];

  const shouldHideHeader = hideHeaderOn.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}

      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={<Home />} />

          {/* Page d’aide */} 
        <Route path="/aide" element={<Aide />} /> 
        {/* Livret Info */}
        <Route path="/livret-info" element={<LivretInfo />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard utilisateur */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Logout */}
        <Route path="/logout" element={<Logout />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <Admin />
            </ProtectedAdmin>
          }
        />
          {/* Espace utilisateur - Chevaux */}
        <Route
          path="/admin/users"
          element={
            <ProtectedAdmin>
              <Users />
            </ProtectedAdmin>
          }
        />

          { /* Détails et édition d’un utilisateur (Admin) */}
        <Route
          path="/admin/users/:id/edit"
          element={
            <ProtectedAdmin>
              <UserEdit />
            </ProtectedAdmin>
          }
        />

          {/* Détails d’un utilisateur (Admin) */}
        <Route
          path="/admin/users/:id"
          element={
            <ProtectedAdmin>
              <UserDetails />
            </ProtectedAdmin>
          }
        />
       {/* Livret Numérique */}
        <Route path="/livret-numerique" element={<LivretNumerique />} />

        {/* Espace utilisateur - Chevaux */}
        <Route path="/chevaux" element={<Chevaux />} /> 
        <Route path="/chevaux/:id" element={<ChevalProfil />} />
  

        {/* Espace utilisateur - Prestataires */}
        <Route path="/prestataires" element={<Prestataires />} />

        {/* Module Livret */}
        <Route path="/livret" element={<LivretLayout />}>
          <Route index element={<Overview />} />
          <Route path="sante" element={<Sante />} />
          <Route path="alimentation" element={<Alimentation />} />
          <Route path="entrainement" element={<Entrainement />} />
          <Route path="documents" element={<Documents />} />
          <Route path="galerie" element={<Galerie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
