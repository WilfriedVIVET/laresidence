import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Login from "../components/Login";

const Connexion = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Connexion</h1>
        </div>
        <div className="content-formulaire">
          <Login />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connexion;
