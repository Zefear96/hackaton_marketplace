import React, { useState } from "react";
// import { useAuth } from '../contexts/AuthContextProvider'; //свой путь
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { register, error } = useAuth(); //вытаскивает контекст

  const navigate = useNavigate();

  return (
    <div>
      {error ? <h3>{error}</h3> : ""}

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
      <input
        type="text"
        placeholder="confirm password"
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button onClick={() => register(email, password, password2)}>
        Register
      </button>
    </div>
  );
};
export default RegistrationPage;
