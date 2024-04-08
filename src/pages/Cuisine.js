import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Amplitude from "../components/Amplitude";
import CreateMenu from "../components/CreateMenu";
import Modal from "../components/Modal";
import ModalReservation from "../components/ModalReservation";
import Draggable from "react-draggable";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formateDateEu, formateDateScript, isEmpty } from "../Utils/Utils";
import store from "../Redux/store/store";
import { getDateMenu } from "../Redux/actions/getDateMenu.action";

const Cuisine = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

  //Date de debut et fin de semaine.
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //Show de calendar.
  const [showCalendar, setShowCalendar] = useState(false);
  //Mois courant.
  const dateNow = new Date();
  const currentMonth = dateNow.getMonth() + 1;

  //Date courante formatée.
  const currentDate = formateDateScript(new Date());
  //Liste des date de la semaine
  const [jourListEu, setJourListEu] = useState([]);
  const [jourListScript, setJourListScript] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  //mois selectionné dans calendar.
  const [selectMonth, setSelectMonth] = useState(currentMonth);
  const jours = [
    "LUNDI",
    "MARDI",
    "MERCREDI",
    "JEUDI",
    "VENDREDI",
    "SAMEDI",
    "DIMANCHE",
  ];

  //Récupération des dates des menus du mois déja enregistrés.
  useEffect(() => {
    if (isEmpty(store.getState().getDateMenu))
      store.dispatch(getDateMenu(selectMonth));
  }, [selectMonth]);

  const datesMenu = useSelector((state) => state.getDateMenu);

  //Fonction pour colorer les cases du calendrier aux dates où un menu est déjà créé en BDD.
  const tileContent = ({ date }) => {
    // Transformation de datesMenu en un tableau comprenant toutes les dates du mois.
    const allDates = datesMenu[0].map((menu) => menu.dateDay);
    const dateString = formatDate(date);
    const isDateHighlighted = allDates.includes(dateString);

    return isDateHighlighted ? (
      <div
        style={{ backgroundColor: "#DB0000", width: "100%", height: "100%" }}
      ></div>
    ) : null;
  };

  // Fonction pour formater une date en string au format "YYYY-MM-DD"
  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  //Récupération de la date clické sur calendar + 6 jours suivant.
  const getDate = (date) => {
    if (date.getDay() === 1) {
      setSelectedDate(date);
      const endDateWeek = new Date(date);
      endDateWeek.setDate(endDateWeek.getDate() + 6);
      setStartDate(formateDateScript(date));
      setEndDate(formateDateScript(endDateWeek));
      const [daysListEu, daysListScript] = generateDaysList(date, endDateWeek);
      setJourListEu(daysListEu);
      setJourListScript(daysListScript);
      //setShowCalendar(!showCalendar);
    }
  };

  //Récupération de toutes les dates de la semaine.
  const generateDaysList = (startDate, endDate) => {
    const daysListEu = [];
    const daysListScript = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      daysListEu.push(formateDateEu(currentDate));
      daysListScript.push(formateDateScript(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return [daysListEu, daysListScript];
  };

  //Affichage du calendrier (Calendar)
  const handleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  //Ouverture modale avec choix (ajouter ou supprimer).
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  //Ouverture modale reservation plat du jour.
  const handleShowReservation = () => {
    setShowReservation(!showReservation);
  };

  //Récupération du mois sélectionné dans calendar.
  const handleGetMonth = (e) => {
    const month = e.activeStartDate.getMonth() + 1;
    setSelectMonth(month);
  };

  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Cuisine</h1>
        </div>
        <div className="admin">
          <Amplitude />
        </div>

        {showModal && (
          <Draggable>
            <Modal handleShowModal={handleShowModal} />
          </Draggable>
        )}

        {showReservation && (
          <Draggable>
            <ModalReservation handleShowReservation={handleShowReservation} />
          </Draggable>
        )}

        <div className="header-menu">
          <span>Date du jour : {currentDate}</span>
          <span className="container-span">
            Menu du{" "}
            <span className="span-date">
              {startDate || "00-00-0000"} au {endDate || "00-00-0000"}{" "}
            </span>
          </span>
          <button className="btn-dashboard" onClick={handleCalendar}>
            Calendrier
          </button>
          {showCalendar && (
            <div className="calendar">
              <Calendar
                onChange={getDate}
                value={selectedDate}
                onActiveStartDateChange={handleGetMonth}
                tileContent={tileContent}
              />
            </div>
          )}
          <button className="btn-dashboard" onClick={handleShowModal}>
            Ajouter/Supprimer un plat
          </button>
          <button className="btn-dashboard" onClick={handleShowReservation}>
            Voir reservation du jour
          </button>
        </div>
        {jours.map((jour, index) => (
          <CreateMenu
            key={index}
            jour={jour}
            jourEu={jourListEu[index]}
            jourScript={jourListScript[index]}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cuisine;
