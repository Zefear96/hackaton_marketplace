import React, { useState, useEffect } from "react";
// import { useAuth } from '../contexts/AuthContextProvider'; //свой путь
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const LoginPage = () => {
  const { checkUserInUsers, checkUserPassword, login, users, getUsers } =
    useAuth();

  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(obj);
  };

  function authorization(user) {
    let userObj = checkUserInUsers(user.username);
    console.log(userObj);
    console.log(user);

    if (!userObj) {
      alert("User Not Found!");
      return;
    }

    if (!checkUserPassword(userObj, user.password)) {
      alert("Passwords don't match");
      return;
    }

    login(userObj.username);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={handleInp}
        name="username"
      />
      <input
        type="text"
        placeholder="email"
        onChange={handleInp}
        name="email"
      />
      <input
        type="text"
        placeholder="password"
        onChange={handleInp}
        name="password"
      />
      <button onClick={() => authorization(user)}>Login</button>
    </div>
  );
};

export default LoginPage;
