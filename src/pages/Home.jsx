//Templates
import Sidebar from "../templates/sidebar/Home";
import Headers from "../templates/headers/Home";
import Navbars from "../templates/navbars/Home";
import Footers from "../templates/footers/Home";
//components
import { FormExercise } from "../components/form/FormExercise";
//hook
import { useEffect, useState } from "react";
//import { UseHook } from "../hook/UseHook";
//API
import { post } from "../api/Query";
import { URL } from "../api/Control";
//css
import "../../public/assets/pages/Home.css";

export default function Home() {
  const [dataValue, setDataValue] = useState();
  useEffect(() => {
    post(URL.create.sport, dataValue)
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data));
    return () => {
      //limpiando setDataValue();
    };
  }, [dataValue]);
  return (
    <div className="container">
      <Sidebar />
      <Navbars />
      <FormExercise onclick={setDataValue} />
      {JSON.stringify(dataValue)}
      <Headers />
      <Footers />
    </div>
  );
}
