import { orderAction } from "../reducers/order"; 
import axios from "axios";



  export const getAllOrders = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
            `/api/v1/my-orders`
        , { withCredentials: true });
        dispatch(orderAction.orderData(data));
      } catch (error) {
          dispatch(orderAction.orderDataError({error}));
      }
      }
  }

  export const clearOrderError = () => {
    return async (dispatch) => {
      dispatch(orderAction.resetOrderDataError())
    }
  }