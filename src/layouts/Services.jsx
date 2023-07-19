import Sidebar from "../templates/sidebar/Services";
import Headers from "../templates/headers/Services";
import Navbars from "../templates/navbars/Services";
import Footers from "../templates/footers/Services";

export default function Services() {
  return (
    <div>
      <Sidebar />
      <Headers />
      <Navbars />
      <h1>Bienvenido a mi aplicación Services</h1>
      <Footers />
    </div>
  );
}
