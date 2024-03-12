import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Amplitude from "../components/Amplitude";
import CreateMenu from "../components/CreateMenu";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Cuisine = () => {
  const currentDate = new Date().toLocaleString();
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

  //Formatage de la date
  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  //Récuperation date de la semaine (début et fin)
  const getDate = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 6);
    const formattedEndDate = formatDate(endDate);
    setDateDebut(formattedDate);
    setDateFin(formattedEndDate);
    setJourList(generateDaysList(date, endDate));
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
        <div className="header-menu">
          <span>Date du jour :{currentDate}</span>
          <span>
            Menu du{" "}
            <span className="span-date">{dateDebut || "00/00/00"} </span>au{" "}
            <span className="span-date">{dateFin || "00/00/00"}</span>
          </span>
          <button className="calendrier" onClick={handleCalendar}>
            Calendrier
          </button>
          {showCalendar && (
            <div className="calendar">
              <Calendar onChange={getDate} value={selectedDate} />
            </div>
          )}
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
