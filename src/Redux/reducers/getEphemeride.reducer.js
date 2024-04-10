import { GET_EPHEMERIDE } from "../actions/getEphemeride.action";

const initialState = {};

export default function getPlat(state = initialState, action) {
  switch (action.type) {
    case GET_EPHEMERIDE:
      return action.payload;

    default:
      return state;
  }
}
