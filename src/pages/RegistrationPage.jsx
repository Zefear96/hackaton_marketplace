import React, { useState } from "react";
// import { useAuth } from '../contexts/AuthContextProvider'; //свой путь
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const RegistrationPage = () => {
  const USER_STATE = {
    username: "",
    email: "",
    password: "",
    passConf: "",
  };


  const [user, setUser] = useState(USER_STATE);

  const handleInp = (e) => {
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
      <button onClick={() => register(userObj)}>Register</button>

    </div>
  );
};
export default RegistrationPage;
