import React from "react";
import ReactDOM from "react-dom/client";
import reducer, { INITIAL_STATE } from "./reducer.js";
import App from "./App";
import "./index.css";
import { StateProvider } from "./StateProvider.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={INITIAL_STATE}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
