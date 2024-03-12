import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";

const Accueil = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Bienvenue chez vous !</h1>
        </div>
        <Carrousel />
      </div>
      <Footer />
    </>
  );
};

export default Accueil;
