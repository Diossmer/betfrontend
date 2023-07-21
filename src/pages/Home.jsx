//Templates
import Sidebar from "../templates/sidebar/Home";
import Headers from "../templates/headers/Home";
import Navbars from "../templates/navbars/Home";
import Footers from "../templates/footers/Home";
//components
import Cards from "../components/card/CardHome";
//hook
import { useEffect, useState } from "react";
//import { UseHook } from "../hook/UseHook";
//API
import { post } from "../api/Query";
import { URL } from "../api/Control";
//css
//import "../../public/assets/Home.css"

const param = {
  deporteId: "25",
  nombreDeporte: "FUTBOL",
};

export default function Home() {
  const [dataValue, setDataValue] = useState();

  useEffect(() => {
    post(URL.crear.sport, param)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataValue(data);
      });
    return () => {};
  }, []);
  console.log(dataValue);

  return (
    <div>
      <Sidebar />
      <Navbars />
      <Headers />
      <p>{JSON.stringify(dataValue?.deporteId)}</p>
      <p>{JSON.stringify(dataValue?.nombreDeporte)}</p>
      <Cards></Cards>
      <Footers />
    </div>
  );
}
