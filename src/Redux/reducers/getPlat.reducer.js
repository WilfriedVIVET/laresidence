import { GET_PLAT } from "../actions/getPlat.action";

const initialState = {};

export default function getPlat(state = initialState, action) {
  switch (action.type) {
    case GET_PLAT:
      return action.payload;

    default:
      return state;
  }
}
