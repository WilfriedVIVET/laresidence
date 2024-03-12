import axios from "axios";

export const GET_MENUS = "GET_MENUS";

export const getMenus = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_RESIDENCE/recettes");

      dispatch({ type: GET_MENUS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
