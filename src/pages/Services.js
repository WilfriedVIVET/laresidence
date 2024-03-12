import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Nos Services:</h1>
        </div>
        <div className="container-services">
          <div className="residence">
            <img src="residence.jpg" alt="La résidence" />
          </div>
          <div className="descriptif">
            <ul>
              <li>Appartements privatifs et adaptés, du studio au T3</li>
              <li>Personnnel qualifié</li>
              <li>Service à la personne</li>
              <li>Accés Wifi</li>
              <li>
                <a href="/menu">Restaurant sur place</a>
              </li>
              <li>
                <a href="/activites">Activité 6j/7</a>
              </li>
              <li>Animaux de compagnie accepté</li>
            </ul>
          </div>
        </div>
        <div className="services">
          <h2>Activitées:</h2>
          <div className="animation">
            <span>
              Toutes les semaines des activitées et animation vous sont proposé{" "}
              <a href="/activites">
                <i>ici</i>
              </a>
              .
            </span>
          </div>
          <div className="bien-etre">
            <div className="coiffure">
              <h2>Coiffure:</h2>
              <div className="image">
                <img src="coiffure.jpg" alt="coiffure" />
              </div>
              <span>Nos coiffeuses reste à votre disposition 6J/7.</span>
              <span>Prenez rendez-vous au : 06.32.32.32.32</span>
            </div>
            <div className="trait"></div>
            <div className="gym">
              <h2>Sport</h2>
              <div className="image">
                <img src="gym.jpg" alt="gym" />
              </div>
              <span>
                Nos coachs sportifs vous ferons garder la <strong>forme</strong>
                .
              </span>
              <span>Tous les matins dans la grande salle.</span>
            </div>
          </div>
          <div className="aide"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
