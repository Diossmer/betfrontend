import { Outlet } from "react-router-dom";
import "../../../public/assets/templates/Hearders.css";

export default function Headers() {
  return (
    <div className={"header"}>
			<Outlet />
    </div>
  );
}
