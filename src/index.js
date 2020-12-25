import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
