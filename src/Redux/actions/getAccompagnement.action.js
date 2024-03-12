import axios from "axios";

export const GET_ACCOMPAGNEMENT = "GET_ACCOMPAGNEMENT";

export const getAccompagnement = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost/API_RESIDENCE/accompagnement"
      );

      dispatch({ type: GET_ACCOMPAGNEMENT, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
