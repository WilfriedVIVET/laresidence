import React from "react";

const MenuDay = ({ menuDay }) => {
  return (
    <div className="content-menu">
      <div className="date-card">
        <span className="jour">
          {menuDay.jour} {menuDay.dateDay}{" "}
        </span>
      </div>

      <div className="card-menu">
        <span>
          &#10070; {menuDay.entre1} <u> ou </u> {menuDay.entre2} <u> OU </u>{" "}
          {menuDay.entre3}
        </span>
        <div className="trait"></div>
        <span>
          &#10070; {menuDay.plat1} <u> OU </u>
          {menuDay.plat2}
        </span>
        <div className="trait"></div>
        <span>
          &#10070; {menuDay.accompagnement1} <u> ET </u>
          {menuDay.accompagnement2}
        </span>
        <div className="trait"></div>
        <span>
          &#10070; {menuDay.fromage1}
          <u> ET </u>
          {menuDay.fromage2}
        </span>
        <div className="trait"></div>
        <span>
          &#10070; {menuDay.dessert1} <u> OU </u> {menuDay.dessert2}
        </span>
        <div className="appetit">
          <span>
            *Les menus sont susceptibles de changer en fonction des livraisons.
          </span>
          <br />
          <span>
            *Toutes nos viandes sont originaires de l'Union Européenne
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuDay;
