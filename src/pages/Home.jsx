//Templates
import Sidebar from "../templates/sidebar/Home";
import Headers from "../templates/headers/Home";
import Navbars from "../templates/navbars/Home";
import Footers from "../templates/footers/Home";
//components
import Cards from "../components/card";
//hook
import { useState, useCallback, useMemo } from "react";
import { UseHook } from "../hook/UseHook";
//API
import { post } from "../api/Query";
import { URL } from "../api/Control";

const param = {
  deporteId: "25",
  nombreDeporte: "FUTBOL",
};

export default function Home() {
  const [dataValue, setDataValue] = useState([]);

  function Sport({ param }) {
    const mensaje = useMemo(() => {
      return postSport();
    }, [param]);
    //deporte
    function postSport() {
      let response = post(URL.crear.sport, param);
      response.then(function (valor) {
        if (
          !dataValue.some((item, index) => index !== valor.data[0] || !dataValue.includes(valor.data)) ||
          !dataValue.filter((item, index) => {
            dataValue.indexOf(item) === index;
          })
        ) {
          setDataValue((prevData) => [...prevData, valor.data]);
        }
      });
      return dataValue;
    }
  }

  return (
    <div>
      <Sidebar />
      <Navbars />
      <Headers />
      {mensaje}
      <Cards></Cards>
      <Footers />
    </div>
  );
}
