import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer">
        <div className="mentions">
          <ul>
            <li className="li-navbar">
              <NavLink to="/politique">Politique de confidentialité</NavLink>
            </li>
            <li className="li-navbar">
              <NavLink to="/mention">Mention lègales</NavLink>
            </li>
          </ul>
        </div>
        <div className="trait-vertical"></div>
        <div className="container-sociaux">
          <div className="sociaux">
            <img src="facebook.png" alt="facebook" />
            <a href="/#">Facebook</a>
          </div>
          <div className="sociaux">
            <img src="twitter.png" alt="twitter" />
            <a href="/#">Twitter</a>
          </div>
          <div className="sociaux">
            <img src="instagram.png" alt="instagram" />
            <a href="/#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>@copyrirght : Wilfried VIVET</span>
      </div>
    </div>
  );
};

export default Footer;
