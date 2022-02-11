import React, { useEffect, useContext } from "react";
import axios from "axios";
import Postcard from "./Postcard";

import { Blogcontext } from "../context/Blogvariables";

function Home() {
  const [posts, setPosts] = React.useState([]);
  const { setLoggedin, loggedin, user } = useContext(Blogcontext);
  console.log("Home = loggedin,user", loggedin, user);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token === "none" || token === null) {
      setLoggedin(false);
    } else {
      setLoggedin(true);
    }
  }, [loggedin, setLoggedin]);

  useEffect(() => {
    console.log("Component home useeffect");

    axios.get("http://127.0.0.1:3001/blog/blogs").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="postslist home">
      {posts.map((post) => (
        <Postcard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default Home;
