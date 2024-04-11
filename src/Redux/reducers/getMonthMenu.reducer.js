import { GET_MONTHMENU } from "../actions/getMonthMenu.action";

const initialState = [];

export default function getMonthMenu(state = initialState, action) {
  switch (action.type) {
    case GET_MONTHMENU:
      return [...state, action.payload];

    default:
      return state;
  }
}
