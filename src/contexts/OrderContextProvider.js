import React, { useContext, useState } from "react";
import axios from "axios";

export const orderContext = React.createContext();
export const useOrder = () => useContext(orderContext);

const JSON_API_ORDERLIST = "http://localhost:8000/orderlist";

const OrderContextProvider = ({ children }) => {
  
  const addOrder = async (newOrder) => {
    await axios.post(JSON_API_ORDERLIST, newOrder);
  };

  return (
    <orderContext.Provider value={{addOrder}}>{children}</orderContext.Provider>
  );
};

export default OrderContextProvider;
