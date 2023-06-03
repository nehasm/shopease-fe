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
            const data = {
                products : [],
                isError : true
            }
          dispatch(productsAction.productsData(data));
        }
      }
  }

  export const getProduct =
  (id) => {
    return async (dispatch) => {
        try {
          let link = `http://localhost:8080/api/v1/product/${id}`;
          const { data } = await axios.get(link);
          data.isError = false;
          dispatch(productAction.productData(data))
        } catch (error) {
            const data = {
                product : {},
                isError : true
            }
          dispatch(productAction.productData(data))
        }
      }
  }