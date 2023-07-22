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
//css module
import styled from "../../public/assets/layouts/Admin.module.css";
import ErrorPage from "../error/404";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div>
        <Navbars />
        <Headers />
        <div className={styled.red}>
          <h1>Admin</h1>
        </div>
        <Routes>
          <Route element={Protected(true)} basename="auth">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
          </Route>
        </Routes>
        <Outlet />
        <Footers />
      </div>
    </>
  );
}
