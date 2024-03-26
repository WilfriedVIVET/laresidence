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
import { formatDate } from "../Utils/Utils";

const Cuisine = () => {
  const currentDate = formatDate(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const [jourList, setJourList] = useState([]);

  const jours = [
    "LUNDI",
    "MARDI",
    "MERCREDI",
    "JEUDI",
    "VENDREDI",
    "SAMEDI",
    "DIMANCHE",
  ];

  //Récuperation date de la semaine (début et fin)
  const getDate = (date) => {
    if (date.getDay() === 1) {
      setSelectedDate(date);
      const formattedDate = formatDate(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 6);
      const formattedEndDate = formatDate(endDate);
      setDateDebut(formattedDate);
      setDateFin(formattedEndDate);
      setJourList(generateDaysList(date, endDate));
      setShowCalendar(!showCalendar);
    }
  };

  //Récupération de toutes les dates entre le début est la fin de la date calendar.
  const generateDaysList = (startDate, endDate) => {
    const daysList = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      let dateFormated = formatDate(currentDate);
      daysList.push(dateFormated);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return daysList;
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
            <span className="span-date">{dateDebut || "00/00/00"} </span>au{" "}
            <span className="span-date">{dateFin || "00/00/00"}</span>
          </span>
          <button className="btn-dashboard" onClick={handleCalendar}>
            Calendrier
          </button>
          {showCalendar && (
            <div className="calendar">
              <Calendar onChange={getDate} value={selectedDate} option />
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
          <CreateMenu key={index} jour={jour} numeroDay={jourList[index]} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cuisine;
