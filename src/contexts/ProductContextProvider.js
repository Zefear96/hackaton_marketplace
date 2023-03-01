import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { JSON_API_PRODUCTS, ACTIONS } from '../helpers/consts';

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
    products: [],
    productDetails: null
};

const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case ACTIONS.GET_PRODUCTS:
            return { ...state, products: action.payload }
        case ACTIONS.GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload}
        default: 
            return state
    };
};


const ProductContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const navigate = useNavigate();
    const location = useLocation();

    const getProducts = async() => {
        const { data } = await axios(`${JSON_API_PRODUCTS}`);
        //поиск window location search пока не добавила
        dispatch({
            type: ACTIONS.GET_PRODUCTS,
            payload: data
        });
    };

    const addProduct = async(newProduct) => {
        await axios.post(JSON_API_PRODUCTS, newProduct);
        getProducts();
    };

    const values = {
        products: state.products,
        productDetails: state.productDetails,

        getProducts,
        addProduct
    };

  return (
    <productContext.Provider value={values}>
        {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider