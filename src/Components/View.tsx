import { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home";

const CSS = {
  base: "esri-view"
};

interface ViewProps {
  map: __esri.WebMap;
  home: boolean;
}

function View(props: ViewProps) {
  const viewContainerRef = useRef(null) as React.RefObject<HTMLDivElement>;
  const [view, updateView] = useState<__esri.MapView | null>(null);

  useEffect(() => {
    if (props.home) {
      const mapView = view as __esri.MapView;
      const home = new Home({ view: mapView });
      view?.ui.add(home, "top-left");
    }
  }, [view, props.home]);

  useEffect(() => {
    async function init(map: __esri.WebMap): Promise<void> {
      if (!map) {
        console.error("ERROR: NO MAP FOUND");
        return;
      }
      const { loaded } = map;
      if (!loaded) {
        await map.load();
      }
      const mapView = createView(map);
      updateView(mapView);
    }

    function createView(map: __esri.WebMap): __esri.MapView {
      const viewConfig = {
        map,
        container: viewContainerRef.current as HTMLDivElement
      };
      return new MapView(viewConfig);
    }

    init(props.map);
  }, [props.map]);

  return <div className={CSS.base} ref={viewContainerRef} />;
}

export default View;
