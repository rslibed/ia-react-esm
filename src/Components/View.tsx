import { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";

const CSS = {
  base: "esri-view"
};

interface ViewProps {
  map: __esri.WebMap;
}

function View(props: ViewProps) {
  const viewContainerRef = useRef(null) as React.RefObject<HTMLDivElement>;
  const [view, updateView] = useState<__esri.MapView | null>(null);
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
