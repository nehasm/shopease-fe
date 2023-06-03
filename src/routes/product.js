import React, {useEffect} from 'react';
import ProductDetails from '../component/productdetails/productdetails';
import { useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { getProduct } from '../service/products';
import { useSelector } from 'react-redux';
import Loader from '../component/common/loader';
import { addItemInCart } from '../service/cart';
import { addItemInWishlist} from '../service/user'

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isError,isLoading,product} = useSelector((state) => state.product);
  const {cart} = useSelector(state => state.cart);
  const productId = location.pathname.split('/')[2];
  const addItemInCartHandler = (productId,data) => {

    return dispatch(addItemInCart(productId,cart._id,data))
  }
  const addItemInWishlistHandler = (data) => {
    return dispatch(addItemInWishlist(data))
  }
  useEffect(() => {
    dispatch(getProduct(productId));
  },[dispatch,productId])
  return <>
        { isLoading || isError ? <Loader /> :  <ProductDetails addItemInWishlistHandler={addItemInWishlistHandler} product={product} addItemInCartHandler={addItemInCartHandler} cartData={cart.cartItems}/>}
  </>
}

export default Product