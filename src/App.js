import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </CartContextProvider>
  );
};
export default App;
