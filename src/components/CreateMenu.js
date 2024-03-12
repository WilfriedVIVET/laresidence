import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { getEntre } from "../Redux/actions/getEntre.action";
import { getPlat } from "../Redux/actions/getPlat.action";
import { getAccompagnement } from "../Redux/actions/getAccompagnement.action";
import { getFromage } from "../Redux/actions/getFromage.action";
import { getDessert } from "../Redux/actions/getDessert.action";
import store from "../Redux/store/store";

const CreateMenu = (props) => {
  useEffect(() => {
    // Dispatch des actions pour récupérer les données si elles ne sont pas déjà dans le store Redux
    if (isEmpty(store.getState().getEntre)) store.dispatch(getEntre());
    if (isEmpty(store.getState().getPlat)) store.dispatch(getPlat());
    if (isEmpty(store.getState().getAccompagnement))
      store.dispatch(getAccompagnement());
    if (isEmpty(store.getState().getFromage)) store.dispatch(getFromage());
    if (isEmpty(store.getState().getDessert)) store.dispatch(getDessert());
  }, []);

  const entre = useSelector((state) => state.getEntre);
  const plat = useSelector((state) => state.getPlat);
  const accompagnement = useSelector((state) => state.getAccompagnement);
  const fromage = useSelector((state) => state.getFromage);
  const dessert = useSelector((state) => state.getDessert);

  const [menuDay, setMenuDay] = useState({
    date: "",
    entre1: "",
    entre2: "",
    entre3: "",
    plat1: "",
    plat2: "",
    accompagnement1: "",
    accompagnement2: "",
    fromage1: "",
    fromage2: "",
    dessert1: "",
    dessert2: "",
  });

  const handleSelectChange = (menuId, selectedValue) => {
    setMenuDay((prevMenuDay) => ({
      ...prevMenuDay,
      [menuId]: selectedValue,
    }));
  };

  const confirm = () => {
    setMenuDay((prevMenuDay) => ({
      ...prevMenuDay,
      date: `${props.numeroDay}`,
    }));
  };

  const handleClick = (e) => {
    console.log("valeur categorie :" + e.target.id);
    console.log("menuDay :" + JSON.stringify(menuDay));
  };

  const getRecipe = (e) => {};

  return (
    <div className="container">
      <div className="container-menu">
        <div className="jour">
          {props.jour}
          <span>{props.numeroDay}</span>
        </div>
        <div className="menu">
          {/******************Entrée***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("entre1", e.target.value)}
              >
                <option value="">Choisissez une entrée</option>
                {!isEmpty(entre) &&
                  entre.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`entre${index}`}
                    >
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
              OU{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("entre2", e.target.value)}
              >
                <option value="">Choisissez une entrée</option>
                {!isEmpty(entre) &&
                  entre.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`entre${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
              OU{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("entre3", e.target.value)}
              >
                <option value="">Choisissez une entrée</option>
                {!isEmpty(entre) &&
                  entre.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`entre${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
            </div>
          </div>

          {/******************Plat***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("plat1", e.target.value)}
              >
                <option value="">Choisissez un plat</option>
                {!isEmpty(plat) &&
                  plat.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`plat${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
              OU{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("plat2", e.target.value)}
              >
                <option value="">Choisissez un plat</option>
                {!isEmpty(plat) &&
                  plat.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`plat${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
            </div>
          </div>
          {/******************Accompagnement***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              <select
                onClick={handleClick}
                onChange={(e) =>
                  handleSelectChange("accompagnement1", e.target.value)
                }
              >
                <option value="">Choisissez un accompagnement</option>
                {!isEmpty(accompagnement) &&
                  accompagnement.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`accompagnement${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
              ET{" "}
              <select
                onClick={handleClick}
                onChange={(e) =>
                  handleSelectChange("accompagnement2", e.target.value)
                }
              >
                <option value="">Choisissez un accompagnement</option>
                {!isEmpty(accompagnement) &&
                  accompagnement.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`accompagnement${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
            </div>
          </div>
          {/******************Fromage***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("fromage1", e.target.value)}
              >
                <option value="">Choisissez un fromage</option>
                {!isEmpty(fromage) &&
                  fromage.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`fromage${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
              ET{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("fromage2", e.target.value)}
              >
                <option value="">Choisissez un fromage</option>
                {!isEmpty(fromage) &&
                  fromage.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`fromage${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
            </div>
          </div>
          {/******************Dessert***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("dessert1", e.target.value)}
              >
                <option value="">Choisissez un dessert</option>
                {!isEmpty(dessert) &&
                  dessert.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`dessert${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
              OU{" "}
              <select
                onClick={handleClick}
                onChange={(e) => handleSelectChange("dessert2", e.target.value)}
              >
                <option value="">Choisissez un dessert</option>
                {!isEmpty(dessert) &&
                  dessert.map((menu, index) => (
                    <option
                      className="liste-plat"
                      key={index}
                      menu={menu}
                      onClick={getRecipe}
                      id={`dessert${index}`}
                    >
                      {" "}
                      {menu.titre}
                    </option>
                  ))}
              </select>{" "}
            </div>
            <button className="confirm" onClick={confirm}>
              Confirmez
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
