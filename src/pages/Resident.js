import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formateDateScript } from "../Utils/Utils";

import axios from "axios";

const Resident = () => {
  const [ephemeride, setEphemeride] = useState({
    nom: "",
    description: "",
  });
  const dateDay = new Date();
  const currentDate = formateDateScript(new Date());
  useEffect(() => {
    try {
      axios.get("https://nominis.cef.fr/json/saintdujour.php").then((res) => {
        const data = res.data.response;
        setEphemeride({
          nom: data.saintdujour.nom,
          description: data.saintdujour.description,
        });
        console.log("saint du jour = " + ephemeride);
      });
    } catch (error) {
      console.log("Probléme de connexion avec l'API.");
    }
  }, []);

  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Page resident</h1>
        </div>
        <div className="ephemeride">
          <span>
            Ephemeride du : {currentDate} : {ephemeride.nom}{" "}
            {ephemeride.description}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resident;
