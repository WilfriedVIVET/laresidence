import { GET_MENU } from "../actions/getMenu.action";

const initialState = [];

export default function getMenu(state = initialState, action) {
  switch (action.type) {
    case GET_MENU:
      return [...state, action.payload];

    default:
      return state;
  }
}
