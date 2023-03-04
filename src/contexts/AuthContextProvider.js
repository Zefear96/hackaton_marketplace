import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext); //custom hook

const API = "http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const register = async (userObj) => {

    const res = await axios.post(API, userObj);
    console.log(res);
    navigate("/login");

  };

  const login = (username) => {

      navigate("/");
      localStorage.setItem("username", username);

      setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("username");

    setUser("");
    navigate("/");
  };

  return (
    <authContext.Provider
      value={{
        user,

        register,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
