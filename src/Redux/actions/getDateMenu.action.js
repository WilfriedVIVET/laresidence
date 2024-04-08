import axios from "axios";

export const GET_DATEMENU = "GET_DATEMENU";

export const getDateMenu = (month) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost/API_RESIDENCE/datemenu/${month}`
      );
      dispatch({ type: GET_DATEMENU, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error.message);
    }
  };
};
