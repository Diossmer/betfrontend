//Templates
import Sidebar from "../templates/sidebar/Home";
import Headers from "../templates/headers/Home";
import Navbars from "../templates/navbars/Home";
import Footers from "../templates/footers/Home";
//components
//hook
//import { useEffect, useState } from "react";
//import { UseHook } from "../hook/UseHook";
//API
//import { show, get, post } from "../api/Query";
//import { URL } from "../api/Control";
//css
import "../../public/assets/pages/Home.css";

export default function Home() {
  return (
    <div className="container">
      <Sidebar />
      <Navbars />
      <Headers />
      <Footers />
    </div>
  );
}
