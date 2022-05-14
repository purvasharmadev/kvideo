import "../auth.css";
import React, { useEffect, useState } from "react";
import { useAxios } from "../../Hooks/useAxios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signin() {
  const location = useLocation();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData({
      method: "post",
      url: "/api/auth/signup/",
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
      },
    });
  };

  const { response, error, fetchData } = useAxios();

  useEffect(() => {
    if (response !== undefined && response.createdUser) {
      toast.success("User Created Succesfully!", {
        id: "signup-success",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      location.state !== null
        ? navigate(location.state?.from?.pathname, { replace: true })
        : navigate("/login", { replace: true });
    } else {
      console.log("error ", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <div className="flex p-1 flex-space-center form-auth">
      <div>
        <img
          src="https://static.dw.com/image/59472921_303.jpg"
          className="img-responsive"
          alt="banner"
        />
      </div>
      <div className="input-container w-50">
        <h2 className="form-heading">Signin</h2>

        <form onSubmit={handleSubmit} className="form-container">
          <label for="fname">First Name</label>
          <input
            value={userData.firstName}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            type="text"
            name="fname"
            placeholder="First name"
          />
          <label for="lname">Last Name</label>
          <input
            value={userData.lastName}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            type="text"
            name="lname"
            placeholder="Last name"
          />

          <label for="email">Email</label>
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            name="email"
            placeholder="yourname@mail.com"
          />
          <label for="password">Password </label>
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            name="password"
            placeholder="********"
          />
          <button type="submit" className="btn btn-primary ">
            Signin
          </button>
          <h4>
            <Link to="/login" className="link">
              Already User? Login Here!{" "}
              <i className="fa fa-arrow-right fa-x"></i>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export { Signin };
