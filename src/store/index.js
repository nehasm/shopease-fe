import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsData';
import productReducer from '../reducers/productData';
import userReducer from '../reducers/user';
import cartReducer from '../reducers/cart';
import orderReducer from '../reducers/order'

const store = configureStore({
    reducer: {
        products : productsReducer,
        product: productReducer,
        user:userReducer,
        cart:cartReducer,
        order:orderReducer
    }
  });
  
export default store;