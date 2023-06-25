import { userAction } from "../reducers/user";
import axios from "axios";
import { showToast } from "../component/common/toast/toast";

export const userLogin = (email, password) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/login`,
        { email, password },
        config
      );
      dispatch(userAction.userData(data));
      showToast("success", "Successfully login!")
    } catch (error) {
      showToast("error","Sorry! Unable to login.")
    }
  };

  export const userSignUp = (userData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`/api/v1/register`, userData, config);
      dispatch(userAction.userData(data));
      showToast("success", "Successfully signup!")
    } catch (error) {
      showToast("error","Sorry! Unable to signup.")
    }
  };

  export const getUserData = () => {
    return async (dispatch) => {
        try {
          const { data } = await axios.get(`/api/v1/user`);
          dispatch(userAction.userData(data));
        } catch (error) {
            dispatch(userAction.userDataError({error}));
        }
      }
  }

  export const forgotPassword = (userData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      await axios.post(`/api/v1/forgot/password`, userData, config);
    } catch (error) {
      showToast("error","Error occurred! Please try again.")
    }
  };

  export const logoutUser = () => {
    return async (dispatch) => {
        try {
          const { data } = await axios.get(`/api/v1/logout`);
          dispatch(userAction.resetUserError());
        } catch (error) {
          showToast("error","Sorry! Unable to logout");
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
      dispatch(userAction.userData(data));
      showToast("success", "Successfully! Reset your password.")
    } catch (error) {
      showToast("success", "Sorry! Unable to reset your password.")
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
      dispatch(userAction.userData(data));
      showToast("success", "Successfully! Updated your profile.")
    } catch (error) {
      showToast("error","Sorry! Unable to update your profile");
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
      dispatch(userAction.userData(data));
      showToast("success", "Successfully! Changed your profile.")
    } catch (error) {
      showToast("error","Sorry! Unable to change your password");
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
      dispatch(userAction.userData(data));
      showToast("success", "Added product in the wishlist")
    } catch (error) {
      showToast("error","Sorry! Unable to add product in the wishlist");
    }
  };
  export const removeProductFromWishlist = (productId) => async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/wishlist?productId=${productId}`
      );
      dispatch(userAction.userData(data));
      showToast("success", "Product removed from the wishlist")
    } catch (error) {
      showToast("error","Sorry! Unable to remove product from the wishlist");
    }
  };

  export const clearUserError = () => async (dispatch) => {
    dispatch(userAction.resetUserError())
  }