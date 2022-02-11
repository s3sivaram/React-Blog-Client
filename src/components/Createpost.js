import React, { useState, useContext } from "react";
import { Blogcontext } from "../context/Blogvariables";

import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Createpost = () => {
  const [postTitle, setPosttitle] = useState("");
  const [postText, setPosttext] = useState("");
  const [postAuthor, setPostAuthor] = useState();

  const { user, loggedin } = useContext(Blogcontext);
  // console.log("create post user =", user);
  // console.log("create post logged =", loggedin);

  const resetblog = () => {
    setPosttitle("");
    setPosttext("");
  };

  const handleCancelpost = () => {
    resetblog();
  };

  const handleCreatepost = (e) => {
    if (postTitle !== "" && postText !== "") {
      setPostAuthor(user);
      axios
        .post("http://127.0.0.1:3001/blog/blogs/createpost", {
          postTitle,
          postText,
          postAuthor,
        })
        .then((res) => {
          console.log(res);
          resetblog();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert(`${user},Please fill in 'Blog Title' and 'Blog Text'`);
    }
  };

  return (
    <div className="createpost">
      <h2>Create Post</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Blog Title"
          variant="standard"
          value={postTitle}
          onChange={(e) => setPosttitle(e.target.value)}
        />
        <br></br>
        <TextField
          id="standard-textarea"
          label=" Blog in Detail... "
          placeholder="Placeholder"
          multiline
          variant="standard"
          style={{ width: 1000 }}
          value={postText}
          onChange={(e) => {
            setPosttext(e.target.value);
            setPostAuthor(user);
          }}
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleCreatepost}>
          Save Blog
        </Button>
        <Button variant="outlined" onClick={handleCancelpost}>
          Cancel
        </Button>
      </Stack>
    </div>
  );
};

export default Createpost;
