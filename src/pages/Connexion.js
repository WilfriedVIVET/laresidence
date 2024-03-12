import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Login from "../components/Login";

const Connexion = () => {
  const bool = true;
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Connexion</h1>
        </div>
        <div className="content-formulaire">
          {bool ? <Login /> : <Information />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connexion;
