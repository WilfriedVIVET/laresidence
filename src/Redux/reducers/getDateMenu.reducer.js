import { GET_DATEMENU } from "../actions/getDateMenu.action";

const initialState = [];

export default function getDateMenu(state = initialState, action) {
  switch (action.type) {
    case GET_DATEMENU:
      return [...state, action.payload];

    default:
      return state;
  }
}
