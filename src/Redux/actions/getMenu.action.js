import axios from "axios";

export const GET_MENU = "GET_MENU";

export const getMenu = (currentDate) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost/API_RESIDENCE/restaurant/${currentDate}`
      );
      dispatch({ type: GET_MENU, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error.message);
    }
  };
};
