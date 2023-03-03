import React, { useState } from "react";
// import { useAuth } from '../contexts/AuthContextProvider'; //свой путь
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth(); //вытаскивает контекст

  return (
    <div>
      {error ? <h3>{error}</h3> : ""}

      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => login(email, password, username)}>Login</button>
    </div>
  );
};

export default LoginPage;
