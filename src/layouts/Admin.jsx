//Templates
import Sidebar from "../templates/sidebar/Admin";
import Navbars from "../templates/navbars/Admin";
import Headers from "../templates/headers/Admin";
import Footers from "../templates/footers/Admin";
//Pages
import Dashboard from "../pages/admin/Dashboard";
//Utils
import Protected from "../utils/Protected";
//Routes
import { Route, Routes, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div>
        <Navbars />
        <Headers />
        <div>
          <h1>Admin</h1>
          <Routes>
            <Route element={Protected(false)}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
          <Outlet />
          <Footers />
        </div>
      </div>
    </>
  );
}
