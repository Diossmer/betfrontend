import Sidebar from "../templates/sidebar/Auth";
import Headers from "../templates/headers/Auth";
import Navbars from "../templates/navbars/Auth";
import Footers from "../templates/footers/Auth";

export default function Auth() {
  return (
    <div>
      <Sidebar />
      <Headers />
      <Navbars />
      <h1>Auth</h1>
      <Footers />
    </div>
  );
}
