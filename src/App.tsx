import { useState } from "react";
import arrow from "../src/images/icon-arrow.svg";
import Header from "./components/Header";
import Map from "./components/Map";
import * as L from "leaflet";

function App() {
  const [input, setInput] = useState<string>("");
  const [map, setMap] = useState<L.Map>();
  // const [location, setLoaction] = useState<LatLngExpression>();
  const handlelocationClick = async () => {
    if (input == "") {
      return;
    }
    try {
      const fe = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.IPFY
        }&ipAddress=${input}`,
        {
          method: "GET",
          redirect: "follow",
        }
      );
      const res = await fe.json();
      console.log(res);
      map?.flyTo([res.location?.lat, res.location?.lng]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-slate-700 ">
        {/* header */}
        <Header
          input={input}
          setInput={setInput}
          arrow={arrow}
          handlelocationClick={handlelocationClick}
        />
      </div>
      {/* <map name=""></map> */}
      <Map setMap={setMap} />
    </>
  );
}

export default App;
