import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { deleteUser } from "../Utils/DelUtils";
import { getUtilisateur } from "../Redux/actions/getUtilisateur.action";

const ListeUtilisateur = () => {
  const users = useSelector((state) => state.getUtilisateur);
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const [reload, setReload] = useState(false);
  const [sortBy, setSortBy] = useState({ column: null, order: "asc" });
  const [selectUtilisateur, setSelectUtilisateur] = useState({
    nom: "",
    prenom: "",
    id: "",
  });
  const [nbResident, setNbResident] = useState(0);
  const [nbStaff, setNbStaff] = useState(0);

  //Rechargement des states.
  useEffect(() => {
    dispatch(getUtilisateur());
  }, [dispatch, reload]);

  //confirmation et suppression de l'utilisateur en BDD.
  const confirm = () => {
    setShowConfirm(false);
    deleteUser(selectUtilisateur.id);
    setReload(!reload);
  };

  //Fonction qui trie les utilisateurs (les residents et le staff).
  const sortResident = (users) => {
    let sortResidents = [];
    let sortStaff = [];

    if (!isEmpty(users)) {
      users.forEach((element) => {
        if (element.role === "resident") {
          sortResidents.push(element);
        } else {
          sortStaff.push(element);
        }
      });
    }

    return { sortResidents, sortStaff };
  };

  // Trie les données en fonction de l'état de tri.
  const sortedData = (data) => {
    if (!sortBy.column) return data;
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortBy.column];
      const bValue = b[sortBy.column];
      if (aValue < bValue) return sortBy.order === "asc" ? -1 : 1;
      if (aValue > bValue) return sortBy.order === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  };

  //Fermeture de la div de confirmation suppression.
  const reset = () => {
    setShowConfirm(false);
  };

  //Gestion du clic sur l'entête de colonne
  const handleSort = (column) => {
    setSortBy((prevSortBy) => ({
      column,
      order:
        prevSortBy.column === column && prevSortBy.order === "asc"
          ? "desc"
          : "asc",
    }));
  };

  //Trie des utilisateurs.
  const { sortResidents, sortStaff } = sortResident(users);

  //Comptage des residents et du staff.
  useEffect(() => {
    setNbResident(sortResidents.length);
    setNbStaff(sortStaff.length);
  }, [sortResidents, sortStaff]);

  //Selection d'une ligne dans le tableau.
  const handleClick = (e, rowData) => {
    setSelectUtilisateur((prevUtilisateur) => ({
      ...prevUtilisateur,
      nom: rowData.nom,
      prenom: rowData.prenom,
      id: rowData.utilisateur_id,
    }));
    setShowConfirm(!showConfirm);
  };

  return (
    <div className="window-admin">
      <div className="header-admin">
        <h2>
          Nombre de residents : {nbResident} | Nombre d'équipié : {nbStaff}
        </h2>
      </div>
      <div className="container-board">
        <div className="board">
          <div className="categorie-utilisateur">Résidents</div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort("nom")}>Nom</th>
                  <th onClick={() => handleSort("prenom")}>Prénom</th>
                  <th onClick={() => handleSort("appt")}>Appart</th>
                  <th onClick={() => handleSort("mixed")}>Mixé</th>
                </tr>
              </thead>
              {!isEmpty(sortResidents) && (
                <tbody>
                  {sortedData(sortResidents).map((resident) => (
                    <tr
                      onClick={(e) => handleClick(e, resident)}
                      key={resident.utilisateur_id}
                    >
                      <td>{resident.nom}</td>
                      <td>{resident.prenom}</td>
                      <td>{resident.appt}</td>
                      <td>{resident.mixed ? "oui" : "non"}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="board">
          <div className="categorie-utilisateur">Equipes</div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Rôle</th>
                </tr>
              </thead>
              {!isEmpty(sortStaff) && (
                <tbody>
                  {sortStaff.map((staff) => (
                    <tr
                      onClick={(e) => handleClick(e, staff)}
                      key={staff.utilisateur_id}
                    >
                      <td>{staff.nom}</td>
                      <td>{staff.prenom}</td>
                      <td>{staff.role}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <div className="delete">
        <input
          type="text"
          readOnly
          value={"Cliquez sur un utilisateur pour le supprimer ."}
        />
        <div
          className="confirm"
          style={{ visibility: showConfirm ? "visible" : "hidden" }}
        >
          <span>
            Voulez-vous vraiment supprimer "
            {selectUtilisateur.nom + " " + selectUtilisateur.prenom}" ?
          </span>
          <div className="container-button">
            <button onClick={confirm} className="button oui">
              Oui
            </button>
            <button onClick={reset} className="button non">
              Non
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeUtilisateur;
