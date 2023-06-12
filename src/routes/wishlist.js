import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserData, removeProductFromWishlist } from '../service/user'
import Wishlist from '../component/cart/wishlist';
import style from '../component/cart/order.module.css'
import icon from '../assets/icon.png';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const WishList = () => {
    const {user} = useSelector(state=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const removeProductFromWishList = (id) => {
        return dispatch(removeProductFromWishlist(id))
    }
    const moveToHomePage = () => {
      return navigate('/');
    }
  return <div>
              <div className={style.cartheader}>
                <BsArrowLeft onClick={moveToHomePage}/>
                <span >
                  <img  src={icon} alt='emall' />
                </span>
              </div>
              <div className={`${style.cartmain} ${style.wishlistmain}`}>
                <div className={style.wishlistitem}>
                    {user ? user.wishlist.map(product => <Wishlist product={product} removeProductFromWishList={removeProductFromWishList}/>) : "Loading data"}
                </div>
              </div>
            </div>
}

export default WishList;