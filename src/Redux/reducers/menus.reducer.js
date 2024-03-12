import { GET_MENUS } from "../actions/menus.action";

const initialState = {};

export default function menusReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENUS:
      return action.payload;

    default:
      return state;
  }
}
