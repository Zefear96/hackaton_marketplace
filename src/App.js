import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import OrderContextProvider from "./contexts/OrderContextProvider";

const App = () => {
  return (
    <OrderContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </OrderContextProvider>
  );
};
export default App;
