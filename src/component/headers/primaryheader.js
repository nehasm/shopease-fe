import React from 'react';
import './header.css';
import icon from '../../assets/icon.png';
import { FiSearch } from 'react-icons/fi';
import { VscAccount} from 'react-icons/vsc';
import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../service/user';

const PrimaryHeader = (props) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  const cartLength = cart.cartItems ? cart.cartItems.length : 0 ;
  const logoutUserHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div className='common-header primary-header'>
      <span className='logo'>
      <img  src={icon} alt='emall' />
      </span>
      <span className='search'>
      <form className="searchBox" onSubmit={props.searchSubmitHandler}>
        <input
          type="text"
          className='search-input'
          placeholder="Search a product"
          onChange={(e) => props.setSearchTerm(e.target.value)}
          value={props.searchTerm}
        />
        <button type='submit'>
          <span className='search-icon'>
          {props.searchTerm && <RxCross2  onClick={props.clearSearchHandler} className='cross-icon'/>}
          < FiSearch   />
          </span>
        </button>
      </form>
      </span>
      <div className='right-section-main'>
      <span className='hamburger'> <GiHamburgerMenu />
        </span>    
        <div className='right-section'>
          <div className='account-main'>
            <span> 
              <VscAccount /> 
              <p> My Account </p>
            </span>
          <div className='account-dd'>
            <div><Link to={`/login`}>SignIn/SignUP</Link></div>
            <div><Link to={`/profile`}>My Profile</Link></div>
            <div><Link to={'/orders'}>My Orders</Link></div>
            <div><Link to={'/wishlist'}>My WishList</Link></div>
            <div>Offers/Rewards</div>
            <div onClick={logoutUserHandler}>Logout</div>
          </div>
          </div>
          <div>
            <span> 
              <Link to={'/wishlist'}>
              <AiOutlineHeart/>  
              <p> Wishlist </p>
              </Link>
            </span> 
          </div>
          <div><span><Link to={'/cart'}> {cartLength && <span>{cartLength}</span>} <AiOutlineShoppingCart/> <p> Cart </p></Link></span></div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryHeader