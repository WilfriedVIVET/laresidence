import axios from "axios";

export const GET_DESSERT = "GET_DESSERT";

export const getDessert = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_RESIDENCE/dessert");

      dispatch({ type: GET_DESSERT, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
