import React, { useState } from "react";
import {
  Outlet,
  Navigate,
} from "react-router-dom";
import { useNotify } from "../../Hooks/useNotify";

function RestrictedRoute({ login }) {

  const [msg, setMsg] = useState();
  useNotify(msg, "res", "warning");
  return login ? (
    ((<Navigate to="/" exact replace={true} />),
    setMsg(() => "You are already logged in!"))
  ) : (
    <Outlet />
  );
}

export { RestrictedRoute };
