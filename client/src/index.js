import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PropertyState from "./context/PropertyState";
// import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { LeadState } from "./context/LeadContext";
import { HandlerState } from "./context/HandlerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PropertyState>
    <LeadState>
      <HandlerState>
      <App />
      </HandlerState>
    </LeadState>
    </PropertyState>
  </React.StrictMode>
);
