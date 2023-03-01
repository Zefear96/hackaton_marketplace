import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />
    </ProductContextProvider>
  );
};
export default App;
