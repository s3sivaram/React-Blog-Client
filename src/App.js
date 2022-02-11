import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
import Profile from "./components/Profile";
import Createpost from "./components/Createpost";
import Authorspost from "./components/Authorspost";
import Signup from "./components/Signup";
import Loginmui from "./components/Loginmui";
import Calchome from "./components/Calculator/Calchome";

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    console.log("token in App.js", token);

    if (token === "none" || token === null) {
      setLoggedin(false);
    } else {
      setLoggedin(true);
    }
  }, []);

  return (
    <Router>
      <>
        <div className="App">
          <header className="App-header">
            <Navbar
              loggedin={loggedin}
              setLoggedin={setLoggedin}
              user={user}
              setUser={setUser}
            />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calc" element={<Calchome />} />
            <Route
              path="/loginmui"
              element={<Loginmui setLoggedin={setLoggedin} setUser={setUser} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route
              path="/createpost"
              element={<Createpost setLoggedin={setLoggedin} user={user} />}
            />
            <Route path="/authorspost/:author" element={<Authorspost />} />
            <Route path="/logout" element={<Home />} />
            <Route
              path="*"
              element={<div className="page404">No Such page exists here</div>}
            />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
