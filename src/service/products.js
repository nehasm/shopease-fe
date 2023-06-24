import axios from "axios";
import { productsAction } from '../reducers/productsData';
import { productAction } from "../reducers/productData";

export const getAllProducts =
  (searchTerm,currentPage = 1,category,price = [0, 100000],ratings = 0) => {
    return async (dispatch) => {
        try {
          let link = `http://localhost:8080/api/v1/products?searchTerm=${searchTerm}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
          if(category) {
            link = `http://localhost:8080/api/v1/products?searchTerm=${searchTerm}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&category=${category}&page=${currentPage}`;
          } 
          const { data } = await axios.get(link);
          data.isError = false;
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
          let link = `http://localhost:8080/api/v1/product/${id}`;
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
      const { data } = await axios.post(
        `/api/v1/review`,
        reviewData,
        config
      );
    } catch (error) {
      console.log(error)
    }
  };


  export const deleteReview = (productId,reviewId) => async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/review?productId=${productId}&id=${reviewId}`
      );
    } catch (error) {
      console.log(error)
    }
  };