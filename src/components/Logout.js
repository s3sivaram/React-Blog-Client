import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setLoggedin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logging out");
    sessionStorage.setItem("token", "none");
    setLoggedin(false);
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
