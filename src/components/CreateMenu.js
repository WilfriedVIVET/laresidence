import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { getEntre } from "../Redux/actions/getEntre.action";
import { getPlat } from "../Redux/actions/getPlat.action";
import { getAccompagnement } from "../Redux/actions/getAccompagnement.action";
import { getFromage } from "../Redux/actions/getFromage.action";
import { getDessert } from "../Redux/actions/getDessert.action";
import store from "../Redux/store/store";
import { postMenu } from "../Utils/PostUtils";

const CreateMenu = (props) => {
  useEffect(() => {
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
    dateDay: "",
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
    jour: "",
  });

  const handleSelectChange = (menuId, selectedValue) => {
    setMenuDay((prevMenuDay) => ({
      ...prevMenuDay,
      dateDay: `${props.numeroDay}`,
      [menuId]: selectedValue,
      jour: `${props.jour}`,
    }));
  };

  const confirm = () => {
    postMenu(menuDay);
  };

  const handleClick = (e) => {
    console.log("menuDay :" + JSON.stringify(menuDay));
  };

  return (
    <div className="container">
      <div className="container-create-menu">
        <div className="jour">
          <div className="jour-detail">
            {props.jour}
            <span>{props.numeroDay}</span>
          </div>
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
