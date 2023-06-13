import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CartItem from '../component/cart/cartitem'
import style from '../component/cart/order.module.css';
import { useOutletContext } from "react-router-dom";

const Checkout = () => {
  const history = useLocation();
  const [allowPayment,setAllowPayment] = useState(false);
  const [changeTab] = useOutletContext()
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
  const placeOrderHandler = () => {
    changeTab('address');
  }
  return     <div className={style.cartmain}>
  <div className={style.cartitemsmain}>
  {orderItems.map(product =><CartItem cartItem={product} updateQunatity={updateQunatity} removeProductFromCart={removeProductFromCart}/>)}
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

}

export default Checkout