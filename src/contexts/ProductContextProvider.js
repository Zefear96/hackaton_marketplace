import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCTS_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const location = useLocation()

  // function GET_PRODUCTS
  const getProducts = async () => {
    const { data } = await axios(`${JSON_API_PRODUCTS}`);
    console.log(data);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  //function addProduct

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
  };

  // function GET_PRODUCTS_DETAILS
  const getProductDetails = async (id) => {
    dispatch({
      type: ACTIONS.GET_PRODUCTS_DETAILS,
      payload: null,
    });

    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);

    dispatch({
      type: ACTIONS.GET_PRODUCTS_DETAILS,
      payload: data,
    });
  };

  // function DELETE_PRODUCTS
  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  //function saveEditedProduct 
  const saveEditedProduct = async(editedProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${editedProduct.id}`, editedProduct);
    getProducts()
  };

  //function for Filter Fetch By Params
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search) //грамотно меняет между собой несколько параметров поиска

    if(value === 'all') {
      search.delete(query) //ключ - значение
    } else {
      search.set(query, value)
    };

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url)
  };

  // const VALUES
  const values = {
    products: state.products,
    productDetails: state.productDetails,

    getProducts,
    addProduct,
    getProductDetails,
    deleteProduct,
    saveEditedProduct,
    fetchByParams
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;