import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Root from "./routes/root";
import store from "./store";
import "./styles/index.scss";
import "./mock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>
);
