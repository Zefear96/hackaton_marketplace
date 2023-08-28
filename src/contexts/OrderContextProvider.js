import React, { useContext, useState } from "react";
import axios from "axios";

export const orderContext = React.createContext();
export const useOrder = () => useContext(orderContext);

const JSON_API_ORDERLIST = "https://db-json-for-marketplace-project.vercel.app/orderlist";

const OrderContextProvider = ({ children }) => {
  
  const addOrder = async (newOrder) => {
    await axios.post(JSON_API_ORDERLIST, newOrder);
  };

  return (
    <orderContext.Provider value={{addOrder}}>{children}</orderContext.Provider>
  );
};

export default OrderContextProvider;
