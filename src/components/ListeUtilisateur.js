import React from "react";

const ListeUtilisateur = () => {
  return (
    <div className="window-admin">
      <div className="header-admin">
        <h2>Liste utilisateurs</h2>
      </div>
      <div className="container-board">
        <div className="board">
          <table>
            <thead>
              <tr>
                <th>Plat</th>
                <th>Nb reservation</th>
              </tr>
            </thead>

            <tbody>
              {/*
              {plats.map((plat, index) => (
                <tr key={index}>
                  <td>{plat}</td>
                  <td>{votes[index]}</td>
                </tr>
              ))}
             */}
            </tbody>
          </table>
          <div className="delete"></div>
        </div>
        <div className="board">
          <table>
            <thead>
              <tr>
                <th>Plat</th>
                <th>Nb reservation</th>
              </tr>
            </thead>
            <tbody>
              {/* 
              {plats.map((plat, index) => (
                <tr key={index}>
                  <td>{plat}</td>
                  <td>{votes[index]}</td>
                </tr>
              ))}
              */}
            </tbody>
          </table>
          <div className="delete"></div>
        </div>
      </div>
    </div>
  );
};

export default ListeUtilisateur;
