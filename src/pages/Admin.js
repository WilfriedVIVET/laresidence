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
          <div className="creation-compte">
            <div className="compte">
              <span>Création nouvel utilisateur</span>
              <div className="radio-input">
                <label htmlFor="admin">Admin</label>
                <input type="radio" id="admin" name="role" value={"admin"} />
                <label htmlFor="cuisine">Cuisine</label>
                <input
                  type="radio"
                  id="cuisine"
                  name="role"
                  value={"cuisine"}
                />
                <label htmlFor="service">Service</label>
                <input
                  type="radio"
                  id="service"
                  name="role"
                  value={"service"}
                />
                <label htmlFor="animation">Animation</label>
                <input
                  type="radio"
                  id="animation"
                  name="role"
                  value={"animation"}
                />
                <label htmlFor="resident">Resident</label>
                <input
                  type="radio"
                  id="resident"
                  name="role"
                  value={"resident"}
                />
              </div>
            </div>
            <form action="submit" className="form-compte">
              <input type="text" placeholder="Saisir un nom" />
              <input type="text" placeholder="Saisir un prénom" />
              <input type="text" placeholder="Saisir un mot de passe" />
              <input type="text" placeholder="Saisir num appartement" />
              <div className="mixe">
                <label htmlFor="mixed">Mixé ?</label>
                <input type="checkbox" id="mixed" name="mixed" placeholder="" />
              </div>
              <button className="valider">VALIDER</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
