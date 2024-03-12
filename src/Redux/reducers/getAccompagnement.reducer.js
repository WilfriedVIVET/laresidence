import { GET_ACCOMPAGNEMENT } from "../actions/getAccompagnement.action";

const initialState = {};

export default function getAccompagnement(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOMPAGNEMENT:
      return action.payload;

    default:
      return state;
  }
}
