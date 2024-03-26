import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../Redux/actions/getMenu.action.js";
import { formatDate, daysOfWeek } from "../Utils/Utils";
import NotMenu from "./NotMenu.js";

const MenuDay = () => {
  const menu = useSelector((state) => state.getMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMenu = async () => {
      const currentDate = new Date();
      const { startOfWeek, endOfWeek } = daysOfWeek(currentDate);

      //chargement du menu du lundi au dimanche de la semaine en cours.
      let currentDateToLoad = startOfWeek;
      while (currentDateToLoad <= endOfWeek) {
        let formatedDate = formatDate(currentDateToLoad);
        dispatch(getMenu(formatedDate));
        currentDateToLoad.setDate(currentDateToLoad.getDate() + 1);
      }

      try {
      } catch (error) {
        console.error(
          "Une erreur s'est produite pendant le chargement des menu:",
          error
        );
      }
    };
    loadMenu();
  }, [dispatch]);

  // Trie les menu dans l ordre de la semaine.
  const sortedMenu = menu
    .filter((menuDay) => menuDay.length > 0)
    .sort((a, b) => {
      const days = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ];

      return days.indexOf(a[0].jour) - days.indexOf(b[0].jour);
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
