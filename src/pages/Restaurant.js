import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuDay from "../components/MenuDay";
import Carrousel from "../components/Carrousel";
import { formatDate } from "../Utils/Utils";
import { daysOfWeek } from "../Utils/Utils";

const Restaurant = () => {
  const currentDate = formatDate(new Date());

  const { startOfWeek, endOfWeek } = daysOfWeek(currentDate);

  const firstDayOfWeek = formatDate(startOfWeek);
  const lastDayOfWeek = formatDate(endOfWeek);

  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>RESTAURANT</h1>
        </div>
        <Carrousel />

        <div className="container-menu">
          <div className="header">
            <div className="date">
              <span>Menu Du</span>
              <br />
              <span>
                {firstDayOfWeek} au {lastDayOfWeek}
              </span>
            </div>
            <div className="photo">
              <img src="menu.jpg" alt="menu" />
            </div>
          </div>
          <span className="appetit1">Bon appétit bien sûr !</span>
          <MenuDay />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
