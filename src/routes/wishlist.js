import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserData, removeProductFromWishlist } from '../service/user'
import Wishlist from '../component/cart/wishlist';


const WishList = () => {
    const {user} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const removeProductFromWishList = (id) => {
        return dispatch(removeProductFromWishlist(id))
    }
  return <>

  {user ? user.wishlist.map(product => <Wishlist product={product} removeProductFromWishList={removeProductFromWishList}/>) : "Loading data"}
  </>
}

export default WishList;