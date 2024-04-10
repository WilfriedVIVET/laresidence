import { GET_ROLE, RESET_ROLE } from "../actions/getRole.action";

const initialState = {};

export default function getRole(state = initialState, action) {
  switch (action.type) {
    case GET_ROLE:
      return action.payload;
    case RESET_ROLE:
      return initialState;
    default:
      return state;
  }
}
