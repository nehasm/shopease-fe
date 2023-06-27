import axios from "axios";
import { productsAction } from '../reducers/productsData';
import { productAction } from "../reducers/productData";
import { showToast } from "../component/common/toast/toast";

export const getAllProducts =
  (searchTerm,currentPage = 1,category,price = [0, 100000],ratings = 0) => {
    return async (dispatch) => {
        try {
          let link = `/api/v1/products?searchTerm=${searchTerm}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
          if(category) {
            link = `/api/v1/products?searchTerm=${searchTerm}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&category=${category}&page=${currentPage}`;
          } 
          const { data } = await axios.get(link);
          dispatch(productsAction.productsData(data))
        } catch (error) {
          dispatch(productsAction.productsDataError({error}));
        }
      }
  }

  export const getProduct =
  (id) => {
    return async (dispatch) => {
        try {
          let link = `/api/v1/product/${id}`;
          const { data } = await axios.get(link);
          dispatch(productAction.productData(data))
        } catch (error) {
          dispatch(productAction.productDataError({error}))
        }
      }
  }

  export const clearproduct = () => {
    return async (dispatch) => {
      dispatch(productAction.resetErrorState())
    }
  }

  export const clearproductsError = () => {
    return async (dispatch) => {
      dispatch(productsAction.resetProductsDataError())
    }
  }

  export const addReview = (reviewData) => async (dispatch) => {

    try {
      const config = { headers: { "Content-Type": "application/json" } };
      await axios.post(
        `/api/v1/review`,
        reviewData,
        config
      );
      showToast("success", "Successfully added your review!");
    } catch (error) {
      showToast("error","Sorry! Unable to add your review.");
    }
  };


  export const deleteReview = (productId,reviewId) => async (dispatch) => {
    try {
      await axios.delete(
        `/api/v1/review?productId=${productId}&id=${reviewId}`
      );
      showToast("success", "Successfully deleted your review!");
    } catch (error) {
      showToast("error","Sorry! Unable to delete your review.");
    }
  };