import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import store from "./Redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
