import { orderAction } from "../reducers/order"; 
import axios from "axios";



  export const getAllOrders = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
            `/api/v1/my-orders`
        , { withCredentials: true });
        data.error = {}
        dispatch(orderAction.orderData(data));
      } catch (error) {
          let data = {
              cart : {},
              error 
          }
          dispatch(orderAction.orderData(data));
      }
      }
  }