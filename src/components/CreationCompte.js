import React, { useEffect, useState } from "react";
import { postCompte } from "../Utils/PostUtils";

const CreationCompte = () => {
  const [selectRadio, setSelectRadio] = useState();
  const [validation, setValidation] = useState(false);

  const [formulaire, setFormulaire] = useState({
    nom: "",
    prenom: "",
    password: "",
    numAppart: "0",
    mixe: 0,
    role: "",
  });

  //Récupération du radio coché.
  const handleRadio = (e) => {
    setSelectRadio(e.target.value);
  };

  //Effacement des champs input au changement de radio
  useEffect(() => {
    const inputs = document.querySelectorAll(".creation-info input");
    inputs.forEach((input) => {
      input.value = "";
      input.checked = false;
    });
  }, [selectRadio, validation]);

  const getElement = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Check de la checkbox.
      const checkboxValue = checked ? 1 : 0;
      setFormulaire((prevFormulaire) => ({
        ...prevFormulaire,
        [name]: checkboxValue,
      }));
    } else {
      //Autres types d'inputs
      setFormulaire((prevFormulaire) => ({
        ...prevFormulaire,
        role: searchRole(selectRadio),
        [name]: value,
      }));
    }
  };

  //Fonction qui me renvoie l'id_role en fonction du role selectionné.
  const searchRole = (role) => {
    switch (role) {
      case "admin":
        return 1;
      case "cuisine":
        return 2;
      case "service":
        return 3;
      case "animation":
        return 4;
      case "resident":
        return 5;
      default:
        return 0;
    }
  };

  //Récupération des données du nouveau compte et envoie.
  const sendForm = (e) => {
    e.preventDefault();
    postCompte(formulaire);
    setValidation(!validation);
    console.log("form envoyé = " + JSON.stringify(formulaire));
  };

  return (
    <>
      <div className="window-admin">
        <div className="header-admin">
          <h2>Création nouvel utilisateur</h2>
        </div>
        <div className="container-radio">
          <div className="radio">
            <label htmlFor="admin">Admin</label>
            <input
              type="radio"
              id="admin"
              name="role"
              value={"admin"}
              onClick={handleRadio}
            />
          </div>
          <div className="radio">
            <label htmlFor="cuisine">Cuisine</label>
            <input
              type="radio"
              id="cuisine"
              name="role"
              value={"cuisine"}
              onClick={handleRadio}
            />
          </div>
          <div className="radio">
            <label htmlFor="service">Service</label>
            <input
              type="radio"
              id="service"
              name="role"
              value={"service"}
              onClick={handleRadio}
            />
          </div>
          <div className="radio">
            <label htmlFor="animation">Animation</label>
            <input
              type="radio"
              id="animation"
              name="role"
              value={"animation"}
              onClick={handleRadio}
            />
          </div>
          <div className="radio">
            <label htmlFor="resident">Resident</label>
            <input
              type="radio"
              id="resident"
              name="role"
              value={"resident"}
              onClick={handleRadio}
            />
          </div>
        </div>

        <form action="" className="form-compte">
          <div className="container-principal">
            <div className="creation-info">
              <label htmlFor="nom">Nom :</label>
              <input type="text" id="nom" name="nom" onChange={getElement} />
            </div>
            <div className="creation-info">
              <label htmlFor="prenom">Prénom :</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                onChange={getElement}
              />
            </div>
            <div className="creation-info">
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="text"
                id="password"
                name="password"
                onChange={getElement}
              />
            </div>
          </div>
          {selectRadio === "resident" && (
            <div className="container-principal">
              <div className="creation-info">
                <label htmlFor="numAppart">Numéro d'appartement :</label>
                <input
                  type="number"
                  id="numAppart"
                  name="numAppart"
                  onChange={getElement}
                />
              </div>
              <div className="creation-info">
                <label htmlFor="mixed">Mixé ?</label>
                <input
                  type="checkbox"
                  id="mixed"
                  name="mixe"
                  onChange={getElement}
                />
              </div>
            </div>
          )}
          <div className="creation-valider">
            <button className="button" onClick={sendForm}>
              VALIDER
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreationCompte;
