import React, { useContext, createContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  let cart = JSON.parse(localStorage.getItem("cart"));

  const getCart = () => {
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };

      localStorage.setItem("cart", JSON.stringify(cart));
    }

    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: getCountProductsInCart(),
    });

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  // function ADD_PROD_TO_CART
  const addProductToCart = (product) => {
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.find(
      (elem) => elem.item.id === product.id
    );

    if (productToFind) {
      cart.products = cart.products.filter((elem) => elem.item.id !== product.id);
    } else {
      cart.products.push(newProduct);
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  // FUNCTION_DELETE_PRODUCT_FROM_CART
  const deleteProductFromCart = (id) => {
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  // FUNCTION CHANGE_COUNT_PRODUCT
  const changeProductCount = (count, id) => {

    if (count < 1) {
      deleteProductFromCart(id);
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  // FUNCTION_CHECK_FOR_BADGE
  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let obj = cart.products.find((elem) => elem.item.id === id);

      if(obj) {
        return true
      } else {
        return false
      }
    }
  };

  // CONSTS
  const values = {
    cart: state.cart,
    cartLength: state.cartLength,

    addProductToCart,
    getCart,
    changeProductCount,
    deleteProductFromCart,
    checkProductInCart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
