import { cartAction } from "../reducers/cart";
import axios from "axios";
import { showToast } from "../component/common/toast/toast";




  export const getCart = () => {
    return async (dispatch) => {
      try {
        dispatch(cartAction.cartDataLoading());
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/cart`
        , { withCredentials: true });
        data.error = {}
        dispatch(cartAction.cartData(data));
      } catch (error) {
        showToast("error",error.message);
        dispatch(cartAction.cartDataError());
      }
      }
  }

  export const addItemInCart = (productId, cartId,productData) => async (dispatch) => {
    try {
      dispatch(cartAction.cartDataLoading());
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/cart?productId=${productId}&id=${cartId}`,
        productData,
        config
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
      showToast("success", "Successfully added product in the cart!")
    } catch (error) {
      showToast("error",error.message)
      dispatch(cartAction.cartDataError());
    }
  };

  export const removeItemFromCart = (productId, cartId) => async (dispatch) => {
    try {
      dispatch(cartAction.cartDataLoading());
      const { data } = await axios.delete(
        `/api/v1/cart?productId=${productId}&cartId=${cartId}`
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
      showToast("success","Successfully removed product from the cart!");
    } catch (error) {
      showToast("error",error.message)
      dispatch(cartAction.cartDataError());
    }
  };

  export const clearCart = (cartId) => async (dispatch) => {
    try {
      dispatch(cartAction.cartDataLoading());
      const { data } = await axios.delete(
        `/api/v1/cart/clear?cartId=${cartId}`
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
    } catch (error) {
      showToast("error",error.message)
      dispatch(cartAction.cartDataError());
    }
  };

  export const updateCartItemQunatity = (productId,cartId,quantity) => async (dispatch) => {
    try {
      dispatch(cartAction.cartDataLoading());
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/cart?productId=${productId}&cartId=${cartId}`,
        quantity,
        config
      );
      data.error = {}
      dispatch(cartAction.cartData(data));
      showToast("success","Successfully updated product quantity!");
    } catch (error) {
      showToast("error",error.message)
      dispatch(cartAction.cartDataError());
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