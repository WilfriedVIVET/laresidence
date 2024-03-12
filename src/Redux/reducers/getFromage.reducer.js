import { GET_FROMAGE } from "../actions/getFromage.action";

const initialState = {};

export default function getFromage(state = initialState, action) {
  switch (action.type) {
    case GET_FROMAGE:
      return action.payload;

    default:
      return state;
  }
}
