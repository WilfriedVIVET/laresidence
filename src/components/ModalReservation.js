import Draggable from "react-draggable";
import React from "react";

const ModalReservation = ({ handleShowReservation }) => {
  const plats = [
    "Entrée 1",
    "Entrée 2",
    "Entrée 3",
    "Plat 1",
    "Plat 2",
    "Accompagnement 1",
    "Accompagnement 2",
    "Dessert 1",
    "Dessert 2",
  ];
  const votes = [5, 8, 3, 6, 9, 2, 7, 4, 1];

  return (
    <Draggable>
      <div className="modal">
        <button className="button close" onClick={handleShowReservation}>
          &#9747;
        </button>
        <div className="modal-header">
          <h2>Reservation du jour</h2>
        </div>

        <div className="liste">
          <table>
            <thead>
              <tr>
                <th>Plat</th>
                <th>Nb reservation</th>
              </tr>
            </thead>
            <tbody>
              {/* Boucle sur les plats pour afficher chaque ligne du tableau */}
              {plats.map((plat, index) => (
                <tr key={index}>
                  <td>{plat}</td>
                  <td>{votes[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Draggable>
  );
};

export default ModalReservation;
