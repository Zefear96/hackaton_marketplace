import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext); //custom hook

const API = "https://abdulkosim1.pythonanywhere.com";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const register = async (username, password) => {
    let formData = new FormData(); //create obj ot classa
    formData.append("username", username); //"username"- key, username-value
    formData.append("password", password);

    try {
      const res = await axios.post(`${API}/register/`, formData, config);
      //formData-что отправить, config-сопроводительные доки
      console.log(res);

      setError("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("Error occured!");
    }
  };

  const login = async (username, password) => {
    let formData = new FormData(); //create obj ot classa
    formData.append("username", username); //"username"- key, username-value
    formData.append("password", password);

    try {
      const res = await axios.post(`${API}api/token/`, formData, config);
      //formData-что отправить, config-сопроводительные доки
      console.log(res.data);

      navigate("/");
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setUser(username);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Wrong username or password!");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/");
  };

  const checkAuth = async () => {
    console.log("WORKED");
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}api/token/refresh/`,
        { refresh: token.refresh },
        { headers: { Authorization } }
      );

      console.log(res); // получаем новый аксес токен

      localStorage.setItem(
        "token",
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      ); // обновляем рефреш токен по аксес токену

      let username = localStorage.getItem("username");
      setUser(username); // чтобы при обновлении страницы не сбрасывалось состояние на ''
    } catch (e) {
      console.log(e);
      logout();
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        error,

        register,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
