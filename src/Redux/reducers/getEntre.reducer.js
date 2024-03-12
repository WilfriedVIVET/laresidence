import { GET_ENTRE } from "../actions/getEntre.action";

const initialState = {};

export default function getEntre(state = initialState, action) {
  switch (action.type) {
    case GET_ENTRE:
      return action.payload;

    default:
      return state;
  }
}
