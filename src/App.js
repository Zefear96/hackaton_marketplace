import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};
export default App;
