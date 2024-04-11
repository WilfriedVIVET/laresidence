import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuDay from "../components/MenuDay";
import Carrousel from "../components/Carrousel";
import { daysOfWeek, formateDateEu, formateDateScript } from "../Utils/Utils";

const Restaurant = () => {
  const currentDate = formateDateEu(new Date());
  const { startOfWeek, endOfWeek } = daysOfWeek(currentDate);
  const startOfWeekFormatted = formateDateScript(startOfWeek);
  const endOfWeekFormatted = formateDateScript(endOfWeek);

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
              <span>
                Menu Du {startOfWeekFormatted} au {endOfWeekFormatted}
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
