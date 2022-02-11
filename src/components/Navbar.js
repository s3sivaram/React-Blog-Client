import React, { useContext } from "react";
import { Blogcontext } from "../context/Blogvariables";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser, loggedin, setLoggedin } = useContext(Blogcontext);

  return (
    <nav className="navbar">
      <div>
        <h1 className="navheading">The Blog World</h1>
      </div>
      <div>
        <ul className="calc-links">
          <li>
            <Link to="/calc">Calculator</Link>
          </li>
        </ul>
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <Link to="/">{user} &nbsp;Home</Link>
          </li>
          {!loggedin && (
            <li>
              <Link to="/loginmui">Login&nbsp;</Link>
            </li>
          )}
          {!loggedin && (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          {loggedin && (
            <li>
              <Link to="/createpost">Create Post &nbsp; </Link>
              <Link to="/profile">Profile &nbsp; </Link>

              <Link
                to="/logout"
                onClick={() => {
                  sessionStorage.setItem("token", "none");
                  setLoggedin(false);
                  setUser("");
                  navigate("/");
                }}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
