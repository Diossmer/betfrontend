//Routes
import { Route, Routes } from "react-router-dom";
//Pages Global
import Home from "../pages/Home";
import Profile from "../pages/Profile";
//Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Register";
//Layouts
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import Services from "../layouts/Services";
//Utils
import Protected from "../utils/Protected";
//Error
import ErrorPage, { ErrorBoundary } from "../error/404";
//API
//import { post, put, destroy, find, get } from "../api/Query";
//import { URL } from "../api/Control";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} errorElement={<ErrorPage />} />
        <Route path={"login"} element={<Login />} errorElement={<ErrorPage />} />
        <Route path={"signup"} element={<Signup />} errorElement={<ErrorPage />} />
        <Route element={Protected(true)}>
          <Route path={"auth/*"} element={<Auth />} errorElement={<ErrorPage />} />
          <Route path={"services/*"} element={<Services />} errorElement={<ErrorPage />} />
          <Route path={"admin/*"} element={<Admin />} errorElement={<ErrorPage />} />
          <Route path="profile" element={<Profile />} errorElement={<ErrorPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} errorElement={<ErrorBoundary />} />
      </Routes>
    </>
  );
}
