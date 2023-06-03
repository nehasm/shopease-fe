import { userAction } from "../reducers/user";
import axios from "axios";


export const userLogin = (email, password) => async (dispatch) => {

    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/login`,
        { email, password },
        config
      );
      data.error = {}
      dispatch(userAction.userData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
      dispatch(userAction.userData(data));
    }
  };

  export const userSignUp = (userData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`/api/v1/register`, userData, config);
      data.error = {}
      dispatch(userAction.userData(data));
    } catch (error) {
        let data = {
            user : {},
            error
        }
        dispatch(userAction.userData(data));
    }
  };

  export const getUserData = () => {
    return async (dispatch) => {
        try {
          const { data } = await axios.get(`/api/v1/user`);
          data.error = {}
          dispatch(userAction.userData(data));
        } catch (error) {
            let data = {
                user : {},
                error
            }
            dispatch(userAction.userData(data));
        }
      }
  }

  export const forgotPassword = (userData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      await axios.post(`/api/v1/forgot/password`, userData, config);
    } catch (error) {
        let data = {
            user : {},
            error
        }
        dispatch(userAction.onlyUpdateError(data));
    }
  };
  export const logoutUser = () => {
    return async (dispatch) => {
        try {
          const { data } = await axios.get(`/api/v1/logout`);
          data.error = {}
          data.user = null
          dispatch(userAction.userData(data));
        } catch (error) {
            dispatch(userAction.onlyUpdateError(error));
        }
      }
  }
  export const resetPassword = (tokenData,passwordData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/password/reset/${tokenData.token}`,
        passwordData,
        config
      );
      data.error = {}
      dispatch(userAction.userData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
      dispatch(userAction.userData(data));
    }
  };

  export const updateProfile = (profileData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/user/update`,
        profileData,
        config
      );
      data.error = {}
      dispatch(userAction.userData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
      dispatch(userAction.userData(data));
    }
  };

  export const changePassword = (passowrdData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/change/password`,
        passowrdData,
        config
      );
      data.error = {}
      dispatch(userAction.userData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
      dispatch(userAction.userData(data));
    }
  };

  export const addItemInWishlist = (productData) => async (dispatch) => {

    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/wishlist`,
        productData,
        config
      );
      data.error = {}
      dispatch(userAction.userData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
      dispatch(userAction.userData(data));
    }
  };
  export const removeProductFromWishlist = (productId) => async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/wishlist?productId=${productId}`
      );
      data.error = {}
      dispatch(userAction.userData(data));
    } catch (error) {
        let data = {
            user : {},
            error 
        }
        dispatch(userAction.userData(data));
    }
  };