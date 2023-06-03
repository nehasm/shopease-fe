import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CartItem from '../component/cart/cartitem'
import ShippingAddress from '../component/cart/shippingaddress';

const Checkout = (props) => {
  const history = useLocation();
  const [allowPayment,setAllowPayment] = useState(false);
  const [orderItems,setOrderItems] = useState(history.state.orderItems);
  const updateQunatity = (productId,quantity) => {
    const updatedOrderItems = orderItems.map(product=>{
      if(product.product.toString() === productId.toString()) {
        return { ...product,quantity:quantity.newQuantity}
      }
    })
    setOrderItems(updatedOrderItems);
  }
  const removeProductFromCart = (productId) => {
    const updatedOrderItems = orderItems.filter(item => item.product.toString() !== productId.toString());
    setOrderItems(updatedOrderItems);
  }
  return <>
  <div>
    Order Summary
    {orderItems.map(product =><CartItem cartItem={product} updateQunatity={updateQunatity} removeProductFromCart={removeProductFromCart}/>)}
  </div>
  <div>
    Shipping Address
    <ShippingAddress/>
  </div>
  <div>
    Select payment method
    
  </div>
  </>
}

export default Checkout