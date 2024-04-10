import { combineReducers } from "redux";
import modeReducer from "./mode.reducer";
import getEntre from "./getEntre.reducer";
import getPlat from "./getPlat.reducer";
import getAccompagnement from "./getAccompagnement.reducer";
import getFromage from "./getFromage.reducer";
import getDessert from "./getDessert.reducer";
import getMenu from "./getMenu.reducer";
import getUtilisateur from "./getUtilisateur.reducer";
import getDateMenu from "./getDateMenu.reducer";
import getRole from "./getRole.reducer";
import getEphemeride from "./getEphemeride.reducer";

export default combineReducers({
  modeReducer,
  getEntre,
  getPlat,
  getAccompagnement,
  getFromage,
  getDessert,
  getMenu,
  getUtilisateur,
  getDateMenu,
  getRole,
  getEphemeride,
});
