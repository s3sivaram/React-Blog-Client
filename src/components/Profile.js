import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = ({ user, setUser }) => {
  const [auth, setAuth] = useState("false");

  useEffect(() => {
    console.log("profile route started");
    axios
      .get("http://127.0.0.1:3001/user/profile", {
        headers: { token: sessionStorage.getItem("token") || "none" },
      })
      .then((res) => {
        console.log(res.data.message);
        console.log("res.data.user=", res.data.user);
        setAuth(res.data.auth);
        setUser(res.data.user);
      });
  }, [setUser]);
  return (
    <div className="profile">
      {auth !== "none" && <h2> {`${user}'s `}Profile page</h2>}
      {auth === "none" && <h2> Not Authorized to see the Profile page</h2>}
    </div>
  );
};

export default Profile;
