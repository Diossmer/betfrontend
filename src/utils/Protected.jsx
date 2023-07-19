import { Navigate, Outlet } from "react-router-dom";

const Protected = (canActive, redirectPath = "/") => {
  if (!canActive) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
export default Protected;
