import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PropertyState from "./context/PropertyState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PropertyState>
      <App />
    </PropertyState>
  </React.StrictMode>
);
