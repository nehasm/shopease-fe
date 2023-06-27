import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUserError, getUserData, removeProductFromWishlist } from '../service/user'
import Wishlist from '../component/cart/wishlist';
import style from '../component/cart/order.module.css'
import icon from '../assets/icon.png';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Loader from '../component/common/loader';
import Error from '../component/common/error';

const WishList = () => {
    const { user,error,loading,isError} = useSelector(state=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> {
      if(isError) {
        dispatch(clearUserError());
        dispatch(getUserData())
      }
    },[])
    const removeProductFromWishList = (id) => {
        return dispatch(removeProductFromWishlist(id))
    }
    const moveToHomePage = () => {
      return navigate('/');
    }
  return <>
  {loading ? <Loader/> : isError ? <Error message="Sorry! We are unable to fetch your wishlist" error={error} navigateToHomePage={true}/> : 
    <div>
    <div className={style.cartheader}>
      <BsArrowLeft onClick={moveToHomePage}/>
      <span >
        <img  src={icon} alt='emall' />
      </span>
    </div>
    <div className={`${style.cartmain} ${style.wishlistmain}`}>
      <div className={style.wishlistitem}>
          {user.wishlist.length > 0 ? user.wishlist.map(product => <Wishlist product={product} removeProductFromWishList={removeProductFromWishList}/>) : <div className={style["no-item-text"]}>No items present in wishlist</div>}
      </div>
    </div>
  </div>
  }
  </>

}

export default WishList;