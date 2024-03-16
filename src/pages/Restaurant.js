import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuDay from "../components/MenuDay";
import Carrousel from "../components/Carrousel";

const Restaurant = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Restaurant</h1>
        </div>
        <Carrousel />

        <div className="container-menu">
          <div className="header">
            <div className="date">
              <span>Menu Du :</span>
              <br />
              <span>12 mars 2024 au 19 mars 2024</span>
              <br />
              <span className="trait"></span>
              <br />
            </div>
            <div className="photo">
              <img src="menu.jpg" alt="menu" />
            </div>
          </div>
          <span className="appetit">Bon appétit bien sûr !</span>
          <MenuDay />
          <span className="appetit">Toutes nos viandes sont d'origine UE</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
