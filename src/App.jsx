import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages globales
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Logout from "./pages/logout";

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

        <Route
          path="/admin/users"
          element={
            <ProtectedAdmin>
              <Users />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/users/:id/edit"
          element={
            <ProtectedAdmin>
              <UserEdit />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/users/:id"
          element={
            <ProtectedAdmin>
              <UserDetails />
            </ProtectedAdmin>
          }
        />

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
