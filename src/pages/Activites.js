import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LesActivites from "../components/LesActivites";

const Activites = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Nos activitées :</h1>
        </div>
        <LesActivites />
      </div>
      <Footer />
    </>
  );
};

export default Activites;
