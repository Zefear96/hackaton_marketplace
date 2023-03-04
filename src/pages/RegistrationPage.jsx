import React, { useState, useEffect } from "react";
// import { useAuth } from '../contexts/AuthContextProvider'; //свой путь
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const RegistrationPage = () => {
  const { users, checkUniqueUser, getUsers, register } = useAuth();

  const USER_STATE = {
    username: "",
    email: "",
    password: "",
    passConf: "",
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState(USER_STATE);

  const handleInp = (e) => {
    if (checkUniqueUser(user.username)) {
      alert("User already exists!");
      return;
    }

    if (e.target.password !== e.target.passConf) {
      alert("Passwords don't match!");
      return;
    } else {
      let userObj = {
        ...user,
        [e.target.name]: e.target.value,
      };
      setUser(userObj);
    }
  };

  const navigate = useNavigate();

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
      <input
        type="text"
        placeholder="confirm password"
        onChange={handleInp}
        name="passConf"
      />
      <button onClick={() => register(user)}>Register</button>
    </div>
  );
};
export default RegistrationPage;
