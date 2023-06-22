import React, { useState } from 'react';
import style from './header.module.css';
import icon from '../../assets/icon.png';
import { FiSearch } from 'react-icons/fi';
import { VscAccount} from 'react-icons/vsc';
import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../service/user';
import Headernav from '../common/sidenav/headernav';
import {UserNav} from '../../constant';

const PrimaryHeader = (props) => {
  const dispatch = useDispatch();
  const [openSideNav, setOpenSideNav] = useState(false);
  const {user} = useSelector(state => state.user);
  const {cart} = useSelector(state => state.cart);
  const cartLength = cart.cartItems ? cart.cartItems.length : 0 ;
  const logoutUserHandler = () => {
    dispatch(logoutUser());
  };
  const closeSideNavHandler = () => {
    setOpenSideNav(false);
  }
  return (
    <div className={style["primary-header"]}>
      <span className={style["logo"]}>
      <img  src={icon} alt='emall' />
      </span>
      <span className={style["search"]}>
      <form className={style["searchBox"]} onSubmit={props.searchSubmitHandler}>
        <input
          type="text"
          className={style["search-input"]}
          placeholder="Search a product"
          onChange={(e) => props.setSearchTerm(e.target.value)}
          value={props.searchTerm}
        />
        <button type='submit'>
          <span className={style["search-icon"]}>
          {props.searchTerm && <RxCross2  onClick={props.clearSearchHandler} className={style["cross-icon"]}/>}
          < FiSearch   />
          </span>
        </button>
      </form>
      </span>
      <div className={style["right-section-main"]}>
      <span onClick={()=>setOpenSideNav(true)} className={style["hamburger"]}> <GiHamburgerMenu />
        </span> 
        {openSideNav ? <Headernav data={UserNav} headerType={"account"} closeSideNavHandler={closeSideNavHandler}/> : 
        <div className={style["right-section"]}>
          <div className={style["account-main"]}>
            <span> 
              <VscAccount /> 
              <p> My Account </p>
            </span>
          <div className={style["account-dd"]}>
            {Object.keys(user).length > 0 ? <span><div><Link to={`/profile`}>My Profile</Link></div>
            <div><Link to={'/orders'}>My Orders</Link></div>
            <div><Link to={'/wishlist'}>My WishList</Link></div>
            <div onClick={logoutUserHandler}>Logout</div></span>:  <span><div><Link to={`/login`}>SignIn/SignUP</Link></div></span>}
            
            
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
          <div><span><Link to={'/cart'}> <AiOutlineShoppingCart/> <p> Cart </p></Link></span>{cartLength > 0 && <span className={style.cartcounttt}>{cartLength}</span>} </div>
        </div>
        }
      </div>
    </div>
  )
}

export default PrimaryHeader