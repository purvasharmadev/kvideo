import { Outlet, useLocation, Navigate } from "react-router-dom";
function PrivateRoute({ login }) {
   const location = useLocation()
  return login ? <Outlet /> : <Navigate to="/login" state={{from:location}} replace/>;
}
export { PrivateRoute };