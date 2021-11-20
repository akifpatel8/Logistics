import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  token: "",
  handleToken() {},
  currentuser: {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, settoken] = useState("");
  const [currentuser, setCurrentUser] = useState({});
  const handleToken = (x, y) => {
    settoken(x);
    setCurrentUser(y);
    // console.log(token);
  };
  return (
    <AuthContext.Provider value={{ token, handleToken, currentuser }}>
      {children}
    </AuthContext.Provider>
  );
};
