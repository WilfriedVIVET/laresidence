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
import Select from "react-select";
import "../styles/settings.scss";

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

  //Fonction qui calcule pour chaque plat la différence de jour entre la
  //derniére mise en menu
  const calculateDiffDayForMenu = (menuOptions, dateOfMenu) => {
    if (!isEmpty(menuOptions)) {
      const diffDaysArray = menuOptions.map((menu) => {
        const dateDebut = new Date(menu.datedmm);
        const dateFin = new Date(dateOfMenu);
        const differenceEnMs = dateFin - dateDebut;
        const differenceEnJours = differenceEnMs / (1000 * 60 * 60 * 24);
        return Math.round(differenceEnJours);
      });

      // Remplacer les valeurs supérieures à 365 jours par 0
      const correctedDiffDaysArray = diffDaysArray.map((diff) =>
        diff > 365 ? 0 : diff
      );

      return correctedDiffDaysArray;
    }
  };

  // Calculer diffDays pour chaque type de menu
  const diffDaysEntre = calculateDiffDayForMenu(entre, props.jourEu);
  const diffDaysPlat = calculateDiffDayForMenu(plat, props.jourEu);
  const diffDaysAccompagnement = calculateDiffDayForMenu(
    accompagnement,
    props.jourEu
  );
  const diffDaysFromage = calculateDiffDayForMenu(fromage, props.jourEu);
  const diffDaysDessert = calculateDiffDayForMenu(dessert, props.jourEu);

  //création menu.
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

  const handleSelectChange = (menuId, selectValue, datedmm) => {
    setMenuDay((prevMenuDay) => ({
      ...prevMenuDay,
      dateDay: props.jourEu,
      [menuId]: selectValue,
      jour: `${props.jour}`,
    }));
  };

  //Post du menu
  const confirm = () => {
    postMenu(menuDay);
  };

  //Style des select-react
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      textTransform: "capitalize",
      color: state.isSelected ? "#DB0000" : "#DB0000",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#DB0000",
    }),
    control: (provided) => ({
      ...provided,
      minWidth: "400px",
      color: "#DB0000",
    }),
    // menu: (provided) => ({ ...provided, width: "auto" }),
  };

  return (
    <div className="container">
      <div className="container-create-menu">
        <div className="jour">
          <div className="jour-detail">
            {props.jour}
            <span>{props.jourScript}</span>
          </div>
        </div>
        <div className="menu">
          {/******************Entrée***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              {!isEmpty(entre) && (
                <Select
                  options={entre.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysEntre[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "entre1",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez une entrée"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
              OU{" "}
              {!isEmpty(entre) && (
                <Select
                  options={entre.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysEntre[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "entre2",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez une entrée"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
              OU{" "}
              {!isEmpty(entre) && (
                <Select
                  options={entre.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysEntre[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "entre3",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez une entrée"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
            </div>
          </div>

          {/******************Plat***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              {!isEmpty(plat) && (
                <Select
                  options={plat.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysPlat[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "plat1",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un plat"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
              OU{" "}
              {!isEmpty(plat) && (
                <Select
                  options={plat.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysPlat[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "plat2",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un plat"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
            </div>
          </div>
          {/******************Accompagnement***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              {!isEmpty(accompagnement) && (
                <Select
                  options={accompagnement.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysAccompagnement[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "accompagnement1",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un accompagnement"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
              ET{" "}
              {!isEmpty(accompagnement) && (
                <Select
                  options={accompagnement.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysAccompagnement[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "accompagnement2",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un accompagnement"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
            </div>
          </div>
          {/******************Fromage***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              {!isEmpty(fromage) && (
                <Select
                  options={fromage.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysFromage[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "fromage1",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un fromage"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
              ET{" "}
              {!isEmpty(fromage) && (
                <Select
                  options={fromage.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysFromage[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "fromage2",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un fromage"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
            </div>
          </div>
          {/******************Dessert***************************** */}
          <div className="partie-global">
            <br />
            <div className="partie">
              &#10070;{" "}
              {!isEmpty(dessert) && (
                <Select
                  options={dessert.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysDessert[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "dessert1",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un dessert"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
              OU{" "}
              {!isEmpty(dessert) && (
                <Select
                  options={dessert.map((menu, index) => ({
                    value: menu.id,
                    label: menu.titre,
                    datedmm: menu.datedmm,
                    diffDays: diffDaysDessert[index],
                  }))}
                  onChange={(selectedOption) =>
                    handleSelectChange(
                      "dessert2",
                      selectedOption.label,
                      selectedOption.datedmm
                    )
                  }
                  styles={customStyles}
                  placeholder="Choisissez un dessert"
                  getOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ width: "70%" }}>{option.label}</span>
                      <span style={{ width: "30%" }}>
                        {option.diffDays} jours
                      </span>
                    </div>
                  )}
                />
              )}
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
