import React, { useEffect, useMemo, useState } from "react";
import Draggable from "react-draggable";
import { postPlat } from "../Utils/PostUtils";
import { deletePlat } from "../Utils/DelUtils";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import "../styles/settings.scss";
import { getEntre } from "../Redux/actions/getEntre.action";
import { getPlat } from "../Redux/actions/getPlat.action";
import { getAccompagnement } from "../Redux/actions/getAccompagnement.action";
import { getFromage } from "../Redux/actions/getFromage.action";
import { getDessert } from "../Redux/actions/getDessert.action";

const Modal = ({ handleShowModal }) => {
  const [clickedButton, setClickedButton] = useState(null);
  const [selectRadio, setSelectRadio] = useState(null);
  const [newPlat, setNewPlat] = useState({
    categorie: "",
    plat: "",
  });
  const [platDel, setPlatDel] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectCategorie, setSelectCategorie] = useState("getEntre");
  const categorie = useSelector((state) => state[selectCategorie]);
  const dispatch = useDispatch();
  const [selectedPlat, setSelectedPlat] = useState(null);

  //Récupération du bouton cliqué entre ajouter ou supprimer.
  const handleClick = (e) => {
    setClickedButton(e.target.textContent);
    dispatch(actions[selectCategorie]());
  };

  //Récupération du plat à ajouter en bdd.
  const handleChange = (e) => {
    setNewPlat((prevNewPlat) => ({
      ...prevNewPlat,
      plat: e.target.value,
    }));
  };

  //Recupération de la liste des plats en fonction du radio selectionné.
  useEffect(() => {
    switch (selectRadio) {
      case "1":
        setSelectCategorie("getEntre");
        break;
      case "2":
        setSelectCategorie("getPlat");
        break;
      case "3":
        setSelectCategorie("getAccompagnement");
        break;
      case "4":
        setSelectCategorie("getFromage");
        break;
      case "5":
        setSelectCategorie("getDessert");
        break;
      default:
    }
  }, [selectRadio]);

  // Map des actions
  const actions = useMemo(
    () => ({
      getEntre,
      getPlat,
      getAccompagnement,
      getFromage,
      getDessert,
    }),
    []
  );

  //Récupération du radio sélectionné.
  const handleRadio = (e) => {
    setSelectRadio(e.target.value);
    setNewPlat((prevNewPlat) => ({
      ...prevNewPlat,
      categorie: e.target.value,
    }));
  };

  //Rechargement des states.
  useEffect(() => {
    dispatch(actions[selectCategorie]());
  }, [selectCategorie, dispatch, actions]);

  //Style dynamique des boutons ajouter et supprimer.
  useEffect(() => {
    const buttons = document.querySelectorAll(".choice button");
    buttons.forEach((button) => {
      if (button.textContent === clickedButton) {
        button.classList.toggle("clicked");
      } else {
        button.classList.remove("clicked");
      }
    });
  }, [clickedButton]);

  //Envoie du nouveau plat en BDD.
  const submitForm = () => {
    //bouton radio bien checké.
    if (selectRadio !== null) {
      //Vérification nouveau plat bien rentré.
      if (newPlat.plat.trim() !== "") {
        postPlat(newPlat);
        dispatch(actions[selectCategorie]());
      }
    } else {
      alert("Veuillez completer tous les champs !");
    }
  };

  //Récupération du plat sélectionné à supprimer.
  const delPlat = (plat) => {
    setShowConfirm(true);
    if (selectRadio !== null) {
      setPlatDel(plat);
      setSelectedPlat(null);
    } else {
      setShowConfirm(false);
      alert("Veuillez choisir une categorie !");
    }
  };

  //confirmation et suppression du plat en BDD.
  const confirm = () => {
    if (deletePlat(platDel)) {
      setShowConfirm(false);
      setSelectedPlat(null);
      dispatch(actions[selectCategorie]());
    }
  };

  //Fermeture de la div de confirmation suppression.
  const reset = () => {
    setShowConfirm(false);
  };

  //Style des Select-react
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "withe",
      textTransform: "capitalize",
      color: state.isSelected ? "#DB0000" : "#DB0000",
      fontSize: "1.2em",
      fontWeight: "bold",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#DB0000",
      fontSize: "1.2em",
      fontWeight: "bold",
    }),
    control: (provided) => ({
      ...provided,
      minWidth: "355px",
      color: "#DB0000",
    }),
  };

  return (
    <Draggable>
      <div className="modal">
        <button className="button close" onClick={handleShowModal}>
          &#9747;
        </button>
        <div className="modal-header">
          <h2>Ajouter/Supprimer un plat</h2>
        </div>
        <div className="categorie">
          <div className="choice-container">
            <div className="choice">
              <span>1-Choisissez une action sur un plat :</span>
              <button className="button" onClick={handleClick}>
                Ajouter
              </button>
              <button className="button" onClick={handleClick}>
                Supprimer
              </button>
            </div>
            <div className="choice">
              <span>2-Choisissez une categorie:</span>
            </div>
            <div className="radio">
              <div className="option" onChange={handleRadio}>
                <label htmlFor="entre">Entrée</label>
                <input
                  type="radio"
                  id="entre"
                  name="plat"
                  value="1"
                  onClick={handleRadio}
                />
              </div>
              <div className="option" onChange={handleRadio}>
                <label htmlFor="plat">Plat</label>
                <input type="radio" id="plat" name="plat" value="2" />
              </div>
              <div className="option" onChange={handleRadio}>
                <label htmlFor="accompagnement">Accompagnement</label>
                <input type="radio" id="accompagnement" name="plat" value="3" />
              </div>
              <div className="option" onChange={handleRadio}>
                <label htmlFor="fromage">Fromage</label>
                <input type="radio" id="fromage" name="plat" value="4" />
              </div>
              <div className="option" onChange={handleRadio}>
                <label htmlFor="dessert">Dessert</label>
                <input type="radio" id="dessert" name="plat" value="5" />
              </div>
            </div>
          </div>
        </div>

        <div className="select">
          <div
            className="confirm"
            style={{ visibility: showConfirm ? "visible" : "hidden" }}
          >
            <span>Voulez-vous vraiment supprimer "{platDel}" ?</span>
            <div className="container-button">
              <button onClick={confirm} className="button oui">
                Oui
              </button>
              <button onClick={reset} className="button non">
                Non
              </button>
            </div>
          </div>
          {clickedButton === "Ajouter" && (
            <div className="containe-info">
              <input
                type="text"
                defaultValue=""
                className="info"
                onChange={handleChange}
              />
              <button className="button" onClick={submitForm}>
                Valider
              </button>
            </div>
          )}

          {clickedButton === "Supprimer" && (
            <Select
              id="select"
              value={selectedPlat}
              options={categorie.map((menu, index) => ({
                value: menu.id,
                label: menu.titre,
              }))}
              onChange={(selectedOption) => {
                setSelectedPlat(selectedOption);
                delPlat(selectedOption.label);
              }}
              styles={customStyles}
              placeholder={"Choisissez un plat"}
            />
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Modal;
