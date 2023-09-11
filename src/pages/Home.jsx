//Templates
import Sidebar from "../templates/sidebar/Home";
import Headers from "../templates/headers/Home";
import Navbars from "../templates/navbars/Home";
import Footers from "../templates/footers/Home";
//components
import { FormSport } from "../components/form/FormSport";
import { FormLeague } from "../components/form/FormLeague";
//hook - father
import { useState } from "react";
//import { UseHook } from "../hook/UseHook";
//css
import "../../public/assets/pages/Home.css";

export default function Home() {
  const [dataSport, setDataSport] = useState();
  const [dataLeague, setDataLeague] = useState();
  
  
  //
  return (
    <div className="container">
      <Sidebar />
      <Navbars />
      <FormSport dataSport={dataSport} setDataSport={setDataSport} />
      <FormLeague  dataLeague={dataLeague} setDataLeague={setDataLeague} />
      {JSON.stringify(dataSport)}
      {JSON.stringify(dataLeague)}
      <Headers />
      <Footers />
    </div>
  );
}
