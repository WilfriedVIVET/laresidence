import { GET_UTILISATEUR } from "../actions/getUtilisateur.action";

const initialState = {};

export default function getUtilisateur(state = initialState, action) {
  switch (action.type) {
    case GET_UTILISATEUR:
      return action.payload;

    default:
      return state;
  }
}
