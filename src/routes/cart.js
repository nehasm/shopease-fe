import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../component/cart/cartitem';
import { removeItemFromCart,updateCartItemQunatity } from '../service/cart';
import { useDispatch } from 'react-redux';
import Loader from '../component/common/loader';
import { useNavigate } from 'react-router-dom';
import style from '../component/cart/order.module.css';
import icon from '../assets/icon.png';
import {BsArrowLeft} from 'react-icons/bs';

const Cart = () => {
  const {cart,loading,error} = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeProductFromCart = (productId) => {
    return dispatch(removeItemFromCart(productId,cart._id))
  }
  const updateQunatity = (productId,updateQunatity) => {
    return dispatch(updateCartItemQunatity(productId,cart._id,updateQunatity))
  }
  const placeOrderHandler = () => {
    return navigate('/checkout/summary',{state:{orderItems:cart.cartItems}});
    
  }
  const moveToHomePage = () => {
    return navigate('/');
  }
  return <>
  { loading ? <Loader/> : 
  <div>
    <div className={style.cartheader}>
      <BsArrowLeft onClick={moveToHomePage}/>
      <span >
      <img  src={icon} alt='emall' />
      </span>
    </div>
    <div className={style.cartmain}>
      <div className={style.cartitemsmain}>
        {cart.cartItems.map(cartItem=>
        <CartItem cartItem={cartItem} updateQunatity={updateQunatity} removeProductFromCart={removeProductFromCart}/>)}

      </div>
      <div className={style.cartamountmain}>
      <div className={style.cartamountmaincard}>
      <div className={style.pricedetails}>PRICE DETAILS</div>
      <div className={style.pricechart}>
        <div>
          <span>
            Total MRP
          </span>
          <span>
            4000
          </span>
        </div>
        <div>
          <span>
            Discount on MRP
          </span>
          <span>
            2000
          </span>
        </div>
        <div>
          <span>
            Convienece fee
          </span>
          <span>
            <span className={style.linethrough}>₹99</span> <span className={style.textcolorlink}>FREE</span>
          </span>
        </div>
        <div>
          <span>
          Total Amount
          </span>
          <span>
            2000
          </span>
        </div>
      </div>
      <div className={style.placeorderbtn}>
      <div onClick={placeOrderHandler}>PLACE ORDER</div>
      </div>
      </div>
      <div className={style.deliverytext}>Please click on the place order to know the delivery charges *</div>
      </div>
      
    </div>
    </div>
  }
  </>
}

export default Cart