import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

//Penser à mettre sur false le devtools avant prod.
const store = configureStore({
  reducer: rootReducer,
  devtools: true,
});

export default store;
