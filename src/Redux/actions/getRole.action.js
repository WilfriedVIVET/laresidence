import axios from "axios";

export const GET_ROLE = "GET_ROLE";
export const RESET_ROLE = "RESET_ROLE";

export const getRole = (account) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `http://localhost/API_RESIDENCE/postAccount.php`,
        {
          name: account.name,
          password: account.password,
        }
      );
      dispatch({ type: GET_ROLE, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};

export const resetRole = () => ({
  type: RESET_ROLE,
});
