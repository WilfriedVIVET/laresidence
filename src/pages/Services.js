import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>NOS SERVICES</h1>
        </div>
        <div className="container-services">
          <div className="image">
            <img src="residence.jpg" alt="La résidence" />
          </div>
          <div className="descriptif">
            <ul>
              <li>Appartements privatifs et adaptés, du studio au T3</li>
              <li>Personnnel qualifié</li>
              <li>Service à la personne</li>
              <li>Accés Wifi</li>
              <li>
                <a href="/restaurant">Restaurant sur place</a>
              </li>
              <li>
                <a href="/activites">Activité 6j/7</a>
              </li>
              <li>Animaux de compagnie accepté</li>
            </ul>
          </div>
        </div>
        <div className="services">
          <div className="titre">
            <h2>ACTIVITÉES</h2>
          </div>
          <div className="animation">
            <div className="image">
              <img src="bingo.jpg" alt="bingo" />
            </div>
            <div className="descriptif">
              <span>
                Toutes les semaines des activitées et animation vous sont
                proposé{" "}
                <a href="/activites">
                  <i>ici</i>
                </a>
              </span>
            </div>
          </div>
          <div className="titre">
            <h2>COIFFURE</h2>
          </div>
          <div className="animation">
            <div className="image">
              <img src="coiffure.jpg" alt="coiffure" />
            </div>
            <div className="descriptif">
              <p>
                Nos coiffeuses reste à votre disposition 6J/7. Prenez
                rendez-vous au : 06.32.32.32.32
              </p>
            </div>
          </div>
          <div className="titre">
            <h2>Sport</h2>
          </div>
          <div className="animation">
            <div className="image">
              <img src="gym.jpg" alt="gym" />
            </div>
            <div className="descriptif">
              <p>
                Nos coachs sportifs vous ferons garder la <strong>forme</strong>
                .
                <br />
                Tous les matins dans la grande salle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
