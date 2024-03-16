import React, { useEffect, useState } from "react";
import { isEmpty } from "../Utils/Utils";
import { getMenu } from "../Redux/actions/getMenu.action";
import { useSelector } from "react-redux";
import store from "../Redux/store/store";
import { formatDate } from "../Utils/Utils";
import NotMenu from "./NotMenu.js";
import { addDays } from "../Utils/Utils";

const Menu = () => {
  const currentDate = formatDate(new Date());
  const [menuLoaded, setMenuLoaded] = useState(false);
  const menu = useSelector((state) => state.getMenu);

  useEffect(() => {
    const fetchMenu = async () => {
      if (isEmpty(store.getState().getMenu)) {
        try {
          const dates = [];
          for (let i = 0; i < 7; i++) {
            const nextDate = addDays(new Date(), i);
            dates.push(formatDate(nextDate));
          }
          const menuPromise = dates.map((date) =>
            store.dispatch(getMenu(date))
          );
          await Promise.all(menuPromise);
          setMenuLoaded(true);
        } catch (error) {
          console.error(
            "Une erreur s'est produite lors du chargement du menu:",
            error
          );
        }
      }
    };
    fetchMenu();
  }, [currentDate]);

  if (!menuLoaded) {
    return <div>Chargement en cours...</div>;
  }
  if (!menu.length) {
    return (
      <>
        <NotMenu />
      </>
    );
  } else {
    return (
      <div className="content">
        {menu.map((menuDay, index) => (
          <div key={index} className="content-menu">
            <div className="date">
              <span className="jour">
                {menu[index][0].jour} {menu[index][0].dateDay}{" "}
              </span>
            </div>
            <div className="menu">
              <span>
                &#10070; {menu[index][0].entre1} <u> ou </u>{" "}
                {menu[index][0].entre2} <u> OU </u> {menu[index][0].entre3}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menu[index][0].plat1} <u> OU </u>
                {menu[index][0].plat2}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menu[index][0].accompagnement1} <u> ET </u>
                {menu[index][0].accompagnement2}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menu[index][0].fromage1}
                <u> ET </u>
                {menu[index][0].fromage2}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menu[index][0].dessert1} <u> OU </u>{" "}
                {menu[index][0].dessert2}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Menu;
