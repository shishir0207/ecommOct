import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../redux/CartReducer';

const store=configureStore({
    reducer:{
        cart:CartReducer
    }
})
export default store;