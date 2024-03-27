import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Amplitude from "../components/Amplitude";
import CreationCompte from "../components/CreationCompte.js";
import ListeUtilisateur from "../components/ListeUtilisateur.js";

const Admin = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Administrateur</h1>
        </div>
        <div>
          <Amplitude />
        </div>
        <div className="container-admin">
          <CreationCompte />
          <ListeUtilisateur />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
