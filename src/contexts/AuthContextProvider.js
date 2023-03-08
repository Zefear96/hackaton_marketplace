import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext); //custom hook

const API = "http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await axios(API);
    // console.log(res);
    setUsers(res.data);
    // console.log(res.data);
  };

  const checkUniqueUser = (username) => {
    return users.some((item) => item.username === username);
  };

  const register = async (userObj) => {
    const res = await axios.post(API, userObj);
    console.log(res);
    navigate("/login");
  };

  const login = (username) => {
    navigate("/");
    let prodObj = {
      products: [],
      totalPrice: 0,
    };

    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("cart", JSON.stringify(prodObj));

    setUser(username);
  };

  const checkUserInUsers = (username) => {
    let userObj = users.find((item) => item.username === username);
    return userObj;
  };

  const checkUserPassword = (user, password) => {
    return user.password === password;
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("cart");

    setUser("");
    // navigate("/");
  };

  return (
    <authContext.Provider
      value={{
        user,
        users,

        getUsers,
        register,
        checkUniqueUser,
        login,
        logout,
        checkUserInUsers,
        checkUserPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
