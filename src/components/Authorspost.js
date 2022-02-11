import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Blogcontext } from "../context/Blogvariables";

function Authorspost() {
  const { author } = useParams("author");
  const [postsauthor, setPostsauthor] = useState([]);
  const navigate = useNavigate();
  const { loggedin, setLoggedin, user } = useContext(Blogcontext);
  const editref = useRef();

  const [updatedblog, setUpdatedblog] = useState("");

  console.log("Authorpost comp loggedin", loggedin);
  console.log("Author=", author);
  console.log("user=", user);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token === "none" || token === null) {
      setLoggedin(false);
    } else {
      setLoggedin(true);
    }
  }, [loggedin, setLoggedin]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/blog/blogs/${author}`, {
        headers: { token: sessionStorage.getItem("token") || "none" },
      })
      .then((res) => {
        const newdata = res.data;
        console.log("new data", newdata);
        setPostsauthor(newdata);
        console.log(postsauthor);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useLayoutEffect(() => {
    editbuttondisable();
  });

  const handleDeleteBlog = (blogid) => {
    alert(`${blogid} will be deleted`);

    axios
      .delete(`http://localhost:3001/blog/blogs/delete/${blogid}`)
      .then((blogtobedeleted) => {
        console.log(blogtobedeleted.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editbuttondisable = () => {
    const editbuttons = document.getElementsByClassName("editbutton");
    for (let i = 0; i < editbuttons.length; i++) {
      editbuttons[i].setAttribute("disabled", "true");
    }
  };
  const handleUpdateBlog = (blogid) => {
    console.log("to be updated blogid=", blogid);
    console.log("update post=", updatedblog.postText);
    axios
      .put(`http://localhost:3001/blog/blogs/updatepost`, {
        postText: updatedblog,
        blogid: blogid,
      })
      .then((blogupdated) => {
        console.log(blogupdated.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return loggedin ? (
    <div className="authorspost">
      <h2 className="authorsposttitle">{author}'s Blog</h2>
      {postsauthor.map((blog, index) => {
        return (
          <div key={blog.id} className="authorcard">
            <div className="authorcardtitle">{blog.postTitle}</div>
            <div>
              <p
                title="Double click to edit the content"
                className="content"
                ref={editref}
                onDoubleClick={(e) => {
                  console.log("index", index);
                  e.target.setAttribute("contentEditable", true);
                  const editbutton = document.getElementById(index);
                  console.log("editbutton", editbutton, index);
                  editbutton.disabled = false;
                }}
                onBlur={(e) => {
                  e.target.setAttribute("contentEditable", true);
                  const updatedposttext = e.target.innerHTML;
                  console.log("blur , text =", updatedposttext);
                  setUpdatedblog(updatedposttext);
                }}
              >
                {blog.postText}
              </p>
            </div>
            <div>{blog.postAuthor}</div>
            <button
              id={index}
              className="editbutton"
              onClick={() => {
                handleUpdateBlog(blog.id);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                handleDeleteBlog(blog.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="logout">You are not logged in</div>
  );
}

export default Authorspost;
