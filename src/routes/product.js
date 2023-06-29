import React, {useEffect} from 'react';
import ProductDetails from '../component/productdetails/productdetails';
import { useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { deleteReview, getProduct,clearproduct } from '../service/products';
import { useSelector } from 'react-redux';
import Loader from '../component/common/loader';
import { addItemInCart } from '../service/cart';
import { addItemInWishlist} from '../service/user';
import { useNavigate } from 'react-router-dom';
import Error from '../component/common/error';
import { showToast } from '../component/common/toast/toast';

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError,error, isLoading,product} = useSelector((state) => state.product);
  const {user,isAuthenticate } = useSelector(state => state.user);
  const {cart} = useSelector(state => state.cart);
  const productId = location.pathname.split('/')[2];
  const productPresentInWishlist = isAuthenticate ? user?.wishlist?.find(item => item.product.toString() === product?._id?.toString()) : null;
  const addItemInCartHandler = (productId,data) => {
    if(isAuthenticate) {
      dispatch(addItemInCart(productId,cart._id,data));
      navigate('/cart');
      return
    }
    showToast("error","Please login to add item in the cart!")
  }
  const addItemInWishlistHandler = (data) => {
    return dispatch(addItemInWishlist(data))
  }
  const deleteReviewHandler = (productId,reviewId) => {
    dispatch(deleteReview(productId,reviewId));
    navigate(0);
  }
  useEffect(() => {
    if(isError) {
      dispatch(clearproduct())
    }
    dispatch(getProduct(productId));
  },[dispatch,productId])
  
  return <>
      {isLoading ? <Loader/> : isError ? <Error message="Sorry! Unable to load the product details" error={error} navigateToHomePage={true} /> : <ProductDetails key={product._id} productPresentInWishlist={productPresentInWishlist} deleteReviewHandler={deleteReviewHandler} userId={user._id} addItemInWishlistHandler={addItemInWishlistHandler} product={product} addItemInCartHandler={addItemInCartHandler} cartData={cart.cartItems}/>}
  </>
}

export default Product