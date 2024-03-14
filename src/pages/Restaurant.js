import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuDay from "../components/MenuDay";

const Restaurant = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Menu</h1>
        </div>
        <div className="container-menu">
          <div className="header">
            <div className="date">
              <span>Du au</span>
              <br />
              <span className="trait"></span>
              <br />
              <span>Bon appétit bien sûr !</span>
            </div>
            <div className="photo">
              <img src="menu.jpg" alt="menu" />
            </div>
          </div>
          <MenuDay />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
