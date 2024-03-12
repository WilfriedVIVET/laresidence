import { combineReducers } from "redux";
import modeReducer from "./mode.reducer";
import getEntre from "./getEntre.reducer";
import getPlat from "./getPlat.reducer";
import getAccompagnement from "./getAccompagnement.reducer";
import getFromage from "./getFromage.reducer";
import getDessert from "./getDessert.reducer";

export default combineReducers({
  modeReducer,
  getEntre,
  getPlat,
  getAccompagnement,
  getFromage,
  getDessert,
});
