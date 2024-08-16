import { useEffect, useRef } from "react";
import "../../node_modules/leaflet/dist/leaflet.css";
import * as L from "leaflet";
const Map = ({
  setMap,
}: {
  setMap: React.Dispatch<React.SetStateAction<L.Map | undefined>>;
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let Map = L.map(mapRef.current!).setView([17.385044, 78.486671], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,

      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(Map);
    let marker = L.marker([17.385044, 78.486671]);
    marker.addTo(Map);
    setMap(Map);
    return () => {
      Map.remove();
    };
  }, []);
  return <div id="map" ref={mapRef} className="w-screen h-screen"></div>;
};

export default Map;
