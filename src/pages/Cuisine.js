import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Amplitude from "../components/Amplitude";
import CreateMenu from "../components/CreateMenu";
import Modal from "../components/Modal";
import ModalReservation from "../components/ModalReservation";
import Draggable from "react-draggable";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formateDateEu, formateDateScript } from "../Utils/Utils";

const Cuisine = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

  //Date de debut et fin de semaine.
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //Show de calendar.
  const [showCalendar, setShowCalendar] = useState(false);
  //Date courante.
  const currentDate = formateDateScript(new Date());
  //Liste des date de la semaine
  const [jourListEu, setJourListEu] = useState([]);
  const [jourListScript, setJourListScript] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const jours = [
    "LUNDI",
    "MARDI",
    "MERCREDI",
    "JEUDI",
    "VENDREDI",
    "SAMEDI",
    "DIMANCHE",
  ];

  //Récupération de la date clické sur calendar + 6jours.
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
      setShowCalendar(!showCalendar);
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
              <Calendar onChange={getDate} value={selectedDate} />
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
