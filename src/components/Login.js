import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Blogcontext } from "../context/Blogvariables";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { setLoggedin, setUser } = useContext(Blogcontext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login clicked");
    axios
      .post("http://127.0.0.1:3001/user/login", { username, password })
      .then((res) => {
        if (res.data.message === "Login successful") {
          sessionStorage.setItem("token", res.data.token);
          console.log(res.data.token);
          setLoggedin(true);
          setUser(res.data.user);
          navigate("/");
        } else if (res.data.message === "user not found") {
          console.log("login failed");
          alert("User not found");
        } else if (res.data.message === "Password did not match") {
          console.log("login failed");
          alert("Password did not match");
        }
      })
      .catch((err, res) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <div>
      <form className="login">
        <input
          type="text"
          id="username"
          placeholder="Username ..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
