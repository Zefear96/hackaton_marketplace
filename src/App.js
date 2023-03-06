import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import OrderContextProvider from "./contexts/OrderContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <FavoritesContextProvider>
          <OrderContextProvider>
            <CartContextProvider>
              <Navbar />
              <MainRoutes />
              <Footer/>
            </CartContextProvider>
          </OrderContextProvider>
        </FavoritesContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
};
export default App;
