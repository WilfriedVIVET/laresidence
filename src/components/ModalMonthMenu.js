import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { getMonthMenu } from "../Redux/actions/getMonthMenu.action";
import store from "../Redux/store/store";
import MenuDay from "./MenuDay";

const MonthMenu = ({ handleShowModalMonthMenu }) => {
  const monthMenus = useSelector((state) => state.getMonthMenu[0]);
  //Mois courant.
  const dateNow = new Date();
  const currentMonth = dateNow.getMonth() + 1;
  //Récupération des menus du mois.
  useEffect(() => {
    if (isEmpty(store.getState().getMonthMenu))
      store.dispatch(getMonthMenu(currentMonth));
  }, [currentMonth]);

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
              <MenuDay menuDay={monthMenu} key={index} />
            ))}
        </div>
      </div>
    </Draggable>
  );
};

export default MonthMenu;
