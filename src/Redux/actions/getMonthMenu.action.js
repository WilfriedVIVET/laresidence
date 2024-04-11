import axios from "axios";

export const GET_MONTHMENU = "GET_MONTHMENU";

export const getMonthMenu = (date) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost/API_RESIDENCE/restaurantmois/${date}`
      );
      dispatch({ type: GET_MONTHMENU, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error.message);
    }
  };
};
