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
//import { post } from "../api/Query";
//import { URL } from "../api/Control";
//css
import "../../public/assets/pages/Home.css";

export default function Home() {
  const [param, setData] = useState({});
  useEffect(() => {
    //post(URL.create.sport);
    return () => {
      //limpiando setData();
    };
  }, []);
  return (
    <div className="container">
      <Sidebar />
      <Navbars />
      <FormExercise onclick={setData} />
      {JSON.stringify(param)}
      <Headers />
      <Footers />
    </div>
  );
}
