import { cartAction } from "../reducers/cart";
import axios from "axios";



  export const getCart = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/cart`
        , { withCredentials: true });
        data.error = {}
        dispatch(cartAction.cartData(data));
      } catch (error) {
          let data = {
              cart : {},
              error 
          }
      dispatch(cartAction.cartData(data));
      }
      }
  }

  export const addItemInCart = (productId, cartId,productData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/cart?productId=${productId}&id=${cartId}`,
        productData,
        config
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
        dispatch(cartAction.cartData(data));
    }
  };

  export const removeItemFromCart = (productId, cartId) => async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/cart?productId=${productId}&cartId=${cartId}`
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
        dispatch(cartAction.cartData(data));
    }
  };

  export const clearCart = (cartId) => async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/cart/clear?cartId=${cartId}`
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
        dispatch(cartAction.cartData(data));
    }
  };

  export const updateCartItemQunatity = (productId,cartId,quantity) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/cart?productId=${productId}&cartId=${cartId}`,
        quantity,
        config
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
        dispatch(cartAction.cartData(data));
    }
  };

  export const priceCalculation = (cartItems) => {
    const priceObj = {
      totalMrp : 0,
      totalDiscountOnMrp : 0,
      totalAmount :0 
    }
    if(cartItems) {
      cartItems.forEach(element => {
        let totalPrice = element.quantity * element.price;
        priceObj.totalAmount = priceObj.totalAmount + totalPrice;
        let priceWithNoDiscount = Math.round(element.discount ? totalPrice * 100 / (100 - element.discount) : totalPrice);
        priceObj.totalMrp = priceObj.totalMrp + priceWithNoDiscount;
        priceObj.totalDiscountOnMrp = priceObj.totalDiscountOnMrp + (priceWithNoDiscount - totalPrice);
      });
    }

    return priceObj;
  }