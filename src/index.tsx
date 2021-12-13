import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist";
import {
  applyPolyfills,
  defineCustomElements
} from "@esri/calcite-components/dist/loader";

(async function init(): Promise<void> {
  await applyPolyfills();
  defineCustomElements(window);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
