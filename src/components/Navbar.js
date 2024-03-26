import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActif, setIsActif] = useState(false);

  const menuBurger = () => {
    setIsActif(!isActif);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="logo.jpg" alt="les girandieres" className="logo" />
      </div>
      <div className={`lateral ${isActif ? "actif" : ""}`}>
        <ul>
          <li className="li-navbar">
            <NavLink to="/">Accueil</NavLink>
          </li>

          <li className="li-navbar">
            <NavLink to="/services">Services</NavLink>
          </li>

          <li className="li-navbar">
            <NavLink to="/activites">Activités</NavLink>
          </li>

          <li className="li-navbar">
            <NavLink to="/restaurant">Restaurant</NavLink>
          </li>

          <li className="li-navbar">
            <NavLink to="/connexion">Connexion</NavLink>
          </li>
          <li className="li-navbar">
            <NavLink to="/admin">Admin/Cuisine</NavLink>
          </li>
        </ul>
      </div>
      <div className="initial-burger">
        <div className="initial">
          <img src="./avatar.png" alt="avatar" />
        </div>
        <div className="burger">
          <img
            src="./menu-btn.png"
            alt="menu-burger"
            className="burger"
            onClick={menuBurger}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
