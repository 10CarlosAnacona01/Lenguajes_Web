import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/variables.css";
import "./css/custom.css";

// UIkit CSS + JS
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);

// Expose UIkit globally so legacy vanilla-JS patterns still work if needed
window.UIkit = UIkit;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
