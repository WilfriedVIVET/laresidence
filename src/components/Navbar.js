import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetRole } from "../Redux/actions/getRole.action";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../Utils/Utils";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActif, setIsActif] = useState(false);
  const role = useSelector((state) => state.getRole);
  const [connect, setConnect] = useState(false);

  const resetStateRole = () => {
    dispatch(resetRole());
  };

  useEffect(() => {
    if (!isEmpty(role)) {
      setConnect(true);
    }
  }, [role, navigate]);

  const menuBurger = () => {
    setIsActif(!isActif);
  };

  const handleConnection = () => {
    setConnect(true);
    navigate(`/${role.role}`);
    resetStateRole();
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
            <NavLink
              to={connect ? "/" : "/connexion"}
              onClick={handleConnection}
            >
              {connect ? "Deconnexion" : "Connexion"}
            </NavLink>
          </li>

          <li className="li-navbar">
            {role.role ? (
              <NavLink to={`/${role.role}`}>
                {role.role.charAt(0).toUpperCase() + role.role.slice(1)}
              </NavLink>
            ) : (
              "Visiteur"
            )}
          </li>
        </ul>
      </div>
      <div className="initial-burger">
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
