import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuDay from "../components/MenuDay";
import Carrousel from "../components/Carrousel";
import {
  daysOfWeek,
  formateDateEu,
  formateDateScript,
  isEmpty,
} from "../Utils/Utils";

import { getMenu } from "../Redux/actions/getMenu.action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../Redux/store/store";

const Restaurant = () => {
  const dispatch = useDispatch();
  const currentDate = formateDateEu(new Date());
  const { startOfWeek, endOfWeek } = daysOfWeek(currentDate);
  const startOfWeekFormatted = formateDateScript(startOfWeek);
  const endOfWeekFormatted = formateDateScript(endOfWeek);
  //Mois courant.
  const dateNow = new Date();
  const currentMonth = dateNow.getMonth() + 1;
  const menus = useSelector((state) => state.getMenu);

  useEffect(() => {
    const loadMenu = async () => {
      const currentDate = new Date();
      const { startOfWeek, endOfWeek } = daysOfWeek(currentDate);
      //chargement du menu du lundi au dimanche de la semaine en cours.
      if (menus.length === 0) {
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
  }, [dispatch, menus]);

  // Tri des menus par date
  const sortedMenu = menus
    .filter((menuDay) => menuDay.length > 0)
    .sort((a, b) => {
      // Convertion des dates en objets Date pour la comparaison
      const dateA = new Date(a[0].dateDay);
      const dateB = new Date(b[0].dateDay);

      return dateA - dateB;
    });

  //Récupération des menus de la semaine.
  useEffect(() => {
    if (isEmpty(store.getState().getMenu))
      store.dispatch(getMenu(currentMonth));
  }, [currentMonth]);

  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>RESTAURANT</h1>
        </div>
        <Carrousel />

        <div className="container-menu">
          <div className="header">
            <div className="date-restaurant">
              <span>
                Menu Du {startOfWeekFormatted} au {endOfWeekFormatted}
              </span>
            </div>
            <div className="photo">
              <img src="menu.jpg" alt="menu" />
            </div>
          </div>
          <span className="appetit1">Bon appétit bien sûr !</span>
          <div className="container-menuDay">
            {!isEmpty(sortedMenu) &&
              sortedMenu.map((dayMenu, index) => (
                <MenuDay menuDay={dayMenu} key={index} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
