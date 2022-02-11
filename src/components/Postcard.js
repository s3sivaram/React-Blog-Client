import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Blogcontext } from "../context/Blogvariables";

function Postcard({ post }) {
  const { loggedin, user } = useContext(Blogcontext);
  console.log("postcard = loggedin,user", loggedin, user);
  const navigate = useNavigate();

  const handleListauthorspost = () => {
    const author = post.postAuthor;
    console.log("listauthorspost clicked", post.postAuthor);
    navigate(`/authorspost/${author}`);
  };

  return (
    <div className="postcard" onClick={handleListauthorspost}>
      <h2 className="postcardtitle">{post.postTitle}</h2>
      <hr />
      <h3 className="postcardtext">{post.postText}</h3>
      <h2 className="postcardauthor">{post.postAuthor}</h2>
    </div>
  );
}

export default Postcard;
