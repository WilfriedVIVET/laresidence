import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../Redux/actions/getMenu.action.js";
import { formateDateEu, daysOfWeek } from "../Utils/Utils";
import NotMenu from "./NotMenu.js";

const MenuDay = () => {
  const menu = useSelector((state) => state.getMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMenu = async () => {
      const currentDate = new Date();
      const { startOfWeek, endOfWeek } = daysOfWeek(currentDate);

      //chargement du menu du lundi au dimanche de la semaine en cours.
      if (menu.length === 0) {
        try {
          let currentDateToLoad = startOfWeek;
          while (currentDateToLoad <= endOfWeek) {
            let formatedDate = formateDateEu(currentDateToLoad);
            dispatch(getMenu(formatedDate));
            currentDateToLoad.setDate(currentDateToLoad.getDate() + 1);
          }
        } catch (error) {
          console.log("une erreur lors du chargement du menu.".error);
        }
      }
    };
    loadMenu();
  }, [dispatch, menu]);

  // Tri des menus par date
  const sortedMenu = menu
    .filter((menuDay) => menuDay.length > 0)
    .sort((a, b) => {
      // Convertion des dates en objets Date pour la comparaison
      const dateA = new Date(a[0].dateDay);
      const dateB = new Date(b[0].dateDay);

      return dateA - dateB;
    });

  // Si le menu est vide, afficher le composant NotMenu
  if (sortedMenu.length === 0) {
    return <NotMenu />;
  } else {
    return (
      <div className="content-menuDay">
        {sortedMenu.map((menuDay, index) => (
          <div key={index} className="content-menu">
            <div className="date">
              <span className="jour">
                {menuDay[0].jour} {menuDay[0].dateDay}{" "}
              </span>
            </div>

            <div className="menu">
              <span>
                &#10070; {menuDay[0].entre1} <u> ou </u> {menuDay[0].entre2}{" "}
                <u> OU </u> {menuDay[0].entre3}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menuDay[0].plat1} <u> OU </u>
                {menuDay[0].plat2}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menuDay[0].accompagnement1} <u> ET </u>
                {menuDay[0].accompagnement2}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menuDay[0].fromage1}
                <u> ET </u>
                {menuDay[0].fromage2}
              </span>
              <div className="trait"></div>
              <span>
                &#10070; {menuDay[0].dessert1} <u> OU </u> {menuDay[0].dessert2}
              </span>
              <div className="appetit">
                <span>
                  *Les menus sont susceptibles de changer en fonction des
                  livraisons.
                </span>
                <br />
                <span>
                  *Toutes nos viandes sont originaires de l'Union Européenne
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
export default MenuDay;
