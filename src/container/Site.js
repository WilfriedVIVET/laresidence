import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Services from "../pages/Services";
import Activites from "../pages/Activites";
import Connexion from "../pages/Connexion";
import Politique from "../pages/Politique";
import Mention from "../pages/Mention";
import Restaurant from "../pages/Restaurant";
import Admin from "../pages/Admin";
import Cuisine from "../pages/Cuisine";
import AdminReservation from "../pages/AdminReservation";
import AdminActivite from "../pages/AdminActivite";
import Resident from "../pages/Resident";

const Site = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/service" element={<AdminReservation />} />
        <Route path="/animation" element={<AdminActivite />} />
        <Route path="/resident" element={<Resident />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Site;
