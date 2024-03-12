import { GET_DESSERT } from "../actions/getDessert.action";

const initialState = {};

export default function getDessert(state = initialState, action) {
  switch (action.type) {
    case GET_DESSERT:
      return action.payload;

    default:
      return state;
  }
}
