import React, { createContext, useState } from "react";

export const Blogcontext = createContext();

const Blogvariables = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div>
      <Blogcontext.Provider value={{ loggedin, setLoggedin, user, setUser }}>
        {children}
      </Blogcontext.Provider>
    </div>
  );
};

export default Blogvariables;
