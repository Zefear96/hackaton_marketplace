import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import FavoritesPage from "./pages/FavoritesPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: "/details/:id",
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 6,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 7,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 8,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 9,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 10,
    },
    {
      link: "/favorites",
      element: <FavoritesPage/>,
      id: 11
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
