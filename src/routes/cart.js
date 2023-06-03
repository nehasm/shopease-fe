import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../component/cart/cartitem';
import { removeItemFromCart,updateCartItemQunatity } from '../service/cart';
import { useDispatch } from 'react-redux';
import Loader from '../component/common/loader';
import { useNavigate } from 'react-router-dom';

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
    return navigate('/checkout',{state:{orderItems:cart.cartItems}});
    
  }
  return <>
  { loading ? <Loader/> : 
    <div>
      <div>
        {cart.cartItems.map(cartItem=>
        <CartItem cartItem={cartItem} updateQunatity={updateQunatity} removeProductFromCart={removeProductFromCart}/>)}
      </div>
      <div>Total cart value</div>
      <button onClick={placeOrderHandler}>Place Order</button>
    </div>
  }
  </>
}

export default Cart