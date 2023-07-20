//Templates
import Sidebar from "../templates/sidebar/Home";
import Headers from "../templates/headers/Home";
import Navbars from "../templates/navbars/Home";
import Footers from "../templates/footers/Home";
//components
import Cards from "../components/card";
//hook
import { useEffect, useState } from "react";
//import { UseHook } from "../hook/UseHook";
//API
import { post } from "../api/Query";
import { URL } from "../api/Control";

const param = {
  deporteId: "25",
  nombreDeporte: "FUTBOL",
};

export default function Home() {
  //const [dataValue, setDataValue] = useState([]);
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

  /* let result = post(URL.crear.sport, param);
  result
    .then((res) => res.json())
    .then((data) => {
      setDataValue(data); */
  /* if (
        !dataValue.some((item, index) => index !== data || !dataValue.includes(data)) ||
        !dataValue.filter((item, index) => {
          dataValue.indexOf(item) === index;
        })
      ) {
        setDataValue((prevData) => [...prevData, data]);
      } */
  /* }); */

  console.log(dataValue);

  return (
    <div>
      <Sidebar />
      <Navbars />
      <Headers />
      <p>{JSON.stringify(dataValue?.deporteId)}</p>
      <p>{JSON.stringify(dataValue?.nombreDeporte)}</p>
      {/* <ul>
        {dataValue.map((element, i) => (
          <li key={i}>{element.deporteId}</li>
        ))}
      </ul> */}
      <Cards></Cards>
      <Footers />
    </div>
  );
}
