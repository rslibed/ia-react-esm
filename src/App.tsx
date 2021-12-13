import React, { useEffect, useState } from "react";
import "./App.css";

import WebMap from "@arcgis/core/WebMap";

import Header from "./Components/Header";
import View from "./Components/View";
import Modal from "./Components/Modal";

import applicationJSON from "./config/application.json";

function App() {
  const { title, splash, webmap, home } = applicationJSON;
  const [map, updatedMap] = useState<__esri.WebMap | null>(null);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const map = new WebMap({
      portalItem: {
        id: webmap
      }
    });
    updatedMap(map);
  }, []);

  return (
    <div className="App">
      <Header title={title} />
      {map ? <View map={map} home={home} /> : null}
      <Modal
        title={splash.title}
        content={splash.content}
        buttonText={splash.buttonText}
      />
    </div>
  );
}

export default App;
