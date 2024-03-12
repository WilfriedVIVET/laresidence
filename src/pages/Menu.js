import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Menu = () => {
  const date1 = "01/01/24";
  const date2 = "04/01/24";
  const entre1 = "Pizza";
  const entre2 = "Oeuf mayonnaise";
  const entre3 = "Potage";
  const plat1 = "Rotie de dinde";
  const plat2 = "Quiche lorraine";
  const accompagnement = "Petits légumes";
  const fromage1 = "Tomme blanche";
  const fromage2 = "Camenbert";
  const dessert1 = "Tarte au citron";
  const dessert2 = "Fruits de saison";

  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Menu</h1>
        </div>
        <div className="menu">
          <div className="header">
            <div className="date">
              <span>
                Du {date1} au {date2}
              </span>
              <br />
              <span className="trait"></span>
              <br />
              <span>Bon appétit bien sûr !</span>
            </div>
            <div className="photo">
              <img src="menu.jpg" alt="menu" />
            </div>
          </div>
          <div className="semaine">
            <div className="jour">
              <h2>Lundi:</h2>
              <span>
                &#10070; {entre1} ou {entre2} ou {entre3}
              </span>
              <span>
                &#10070; {plat1} ou {plat2}
              </span>
              <span>&#10070; {accompagnement}</span>
              <span>
                &#10070; {fromage1} et {fromage2}
              </span>
              <span>
                &#10070; {dessert1} ou {dessert2}
              </span>
            </div>
            <span className="horizontal"></span>
            <div className="jour">
              <h2>Mardi:</h2>
              <span>
                &#10070; {entre1} ou {entre2} ou {entre3}
              </span>
              <span>
                &#10070; {plat1} ou {plat2}
              </span>
              <span>&#10070; {accompagnement}</span>
              <span>
                &#10070; {fromage1} et {fromage2}
              </span>
              <span>
                &#10070; {dessert1} ou {dessert2}
              </span>
            </div>
            <span className="horizontal"></span>
            <div className="jour">
              <h2>Mercredi:</h2>
              <span>
                &#10070; {entre1} ou {entre2} ou {entre3}
              </span>
              <span>
                &#10070; {plat1} ou {plat2}
              </span>
              <span>&#10070; {accompagnement}</span>
              <span>
                &#10070; {fromage1} et {fromage2}
              </span>
              <span>
                &#10070; {dessert1} ou {dessert2}
              </span>
            </div>
            <span className="horizontal"></span>
            <div className="jour">
              <h2>Jeudi:</h2>
              <span>
                &#10070; {entre1} ou {entre2} ou {entre3}
              </span>
              <span>
                &#10070; {plat1} ou {plat2}
              </span>
              <span>&#10070; {accompagnement}</span>
              <span>
                &#10070; {fromage1} et {fromage2}
              </span>
              <span>
                &#10070; {dessert1} ou {dessert2}
              </span>
            </div>
            <span className="horizontal"></span>
            <div className="jour">
              <h2>Vendredi:</h2>
              <span>
                &#10070; {entre1} ou {entre2} ou {entre3}
              </span>
              <span>
                &#10070; {plat1} ou {plat2}
              </span>
              <span>&#10070; {accompagnement}</span>
              <span>
                &#10070; {fromage1} et {fromage2}
              </span>
              <span>
                &#10070; {dessert1} ou {dessert2}
              </span>
            </div>
            <span className="horizontal"></span>
            <div className="jour">
              <h2>Samedi:</h2>
              <span>
                &#10070; {entre1} ou {entre2} ou {entre3}
              </span>
              <span>
                &#10070; {plat1} ou {plat2}
              </span>
              <span>&#10070; {accompagnement}</span>
              <span>
                &#10070; {fromage1} et {fromage2}
              </span>
              <span>
                &#10070; {dessert1} ou {dessert2}
              </span>
            </div>
            <span className="horizontal"></span>
            <div className="jour">
              <h2>Dimanche:</h2>
              <span>
                &#10070; {entre1} ou {entre2} ou {entre3}
              </span>
              <span>
                &#10070; {plat1} ou {plat2}
              </span>
              <span>&#10070; {accompagnement}</span>
              <span>
                &#10070; {fromage1} et {fromage2}
              </span>
              <span>
                &#10070; {dessert1} ou {dessert2}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
