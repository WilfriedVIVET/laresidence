import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Amplitude from "../components/Amplitude";

const Admin = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Administrateur</h1>
        </div>
        <div className="admin">
          <Amplitude />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
