import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";
const NavBar = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const nameFromLS = localStorage.getItem("lsname");
    if (nameFromLS?.length) {
      setName(nameFromLS);
    } else setName("");
  }, [name]);

  const handleNavHome = () => {
    navigate("/");
  };
  const handleNavSignIn = () => {
    navigate("/signin");
  };
  const handleNavRegister = () => {
    navigate("/register");
  };

  const handleNavDash = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="nav-container">
        <ul className="nav">
          <li onClick={handleNavHome} className="nav-bar-link">
            Home
          </li>
          {name && (
            <li onClick={handleNavDash} className="nav-bar-link">
              Dashboard
            </li>
          )}
          {!name && (
            <li onClick={handleNavSignIn} className="nav-bar-link">
              Sign In
            </li>
          )}
          {!name && (
            <li onClick={handleNavRegister} className="nav-bar-link">
              Register
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
