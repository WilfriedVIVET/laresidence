import React from "react";
import Draggable from "react-draggable";
import { useSelector } from "react-redux";

import { isEmpty } from "../Utils/Utils";

const MonthMenu = ({ handleShowModalMonthMenu }) => {
  const monthMenus = useSelector((state) => state.getMonthMenu[0]);

  return (
    <Draggable>
      <div className="monthMenu">
        <button className="button close" onClick={handleShowModalMonthMenu}>
          &#9747;
        </button>
        <div className="modal-header">
          <h2>Menu du mois</h2>
        </div>
        <div className="content-monthMenu">
          {!isEmpty(monthMenus) &&
            monthMenus.map((monthMenu, index) => (
              <div key={index} className="content-menu">
                <div className="date">
                  <span className="jour">
                    {monthMenu.jour} {monthMenu.dateDay}{" "}
                  </span>
                </div>

                <div className="menu">
                  <span>
                    &#10070; {monthMenu.entre1} <u> ou </u> {monthMenu.entre2}{" "}
                    <u> OU </u> {monthMenu.entre3}
                  </span>
                  <div className="trait"></div>
                  <span>
                    &#10070; {monthMenu.plat1} <u> OU </u>
                    {monthMenu.plat2}
                  </span>
                  <div className="trait"></div>
                  <span>
                    &#10070; {monthMenu.accompagnement1} <u> ET </u>
                    {monthMenu.accompagnement2}
                  </span>
                  <div className="trait"></div>
                  <span>
                    &#10070; {monthMenu.fromage1}
                    <u> ET </u>
                    {monthMenu.fromage2}
                  </span>
                  <div className="trait"></div>
                  <span>
                    &#10070; {monthMenu.dessert1} <u> OU </u>{" "}
                    {monthMenu.dessert2}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Draggable>
  );
};

export default MonthMenu;
