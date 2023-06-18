import React, {useEffect} from 'react';
import ProductDetails from '../component/productdetails/productdetails';
import { useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { deleteReview, getProduct } from '../service/products';
import { useSelector } from 'react-redux';
import Loader from '../component/common/loader';
import { addItemInCart } from '../service/cart';
import { addItemInWishlist} from '../service/user';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError,isLoading,product} = useSelector((state) => state.product);
  const {user} = useSelector(state => state.user);
  const {cart} = useSelector(state => state.cart);
  const productId = location.pathname.split('/')[2];
  const productPresentInWishlist = user?.wishlist?.find(item => item.product.toString() === product._id.toString());
  const addItemInCartHandler = (productId,data) => {

    return dispatch(addItemInCart(productId,cart._id,data))
  }
  const addItemInWishlistHandler = (data) => {
    return dispatch(addItemInWishlist(data))
  }
  const deleteReviewHandler = (productId,reviewId) => {
    dispatch(deleteReview(productId,reviewId));
    navigate(0);
  }
  useEffect(() => {
    dispatch(getProduct(productId));
  },[dispatch,productId])
  return <>
        { isLoading || isError ? <Loader /> :  <ProductDetails productPresentInWishlist={productPresentInWishlist} deleteReviewHandler={deleteReviewHandler} userId={user._id} addItemInWishlistHandler={addItemInWishlistHandler} product={product} addItemInCartHandler={addItemInCartHandler} cartData={cart.cartItems}/>}
  </>
}

export default Product