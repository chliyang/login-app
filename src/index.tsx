import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
