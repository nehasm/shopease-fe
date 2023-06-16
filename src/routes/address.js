import React, { useState } from 'react';
import style from '../component/cart/order.module.css'
import Addressform from '../component/cart/addressform';
import { useOutletContext } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Address = () => {
    const [allowPayment,setAllowPayment] = useState(false);
    const [shippingInfo,setShippingInfo] = useState({})
    const [changeTab] = useOutletContext()
    const history = useLocation();
    const orderItems = history.state.orderItems;
    const cartId = history.state.cartId;
    let priceData = history.state.priceData;
    let shippingPrice = 99;
    priceData.shippingPrice = 99;
    let paymentBtnClass = allowPayment ? "" : style.makepaymentbtndisable;
    const isAddressValidAdded = (data) => {
        setAllowPayment(true);
        setShippingInfo({
          address: data.address,
          city:data.city,
          state:data.state,
          country:data.country,
          pinCode:data.pincode,
          phoneNo:data.phone
      });
    }
    const proceedPayment  = () => {
      let orderData = {orderItems,shippingInfo};
      changeTab('payment',orderData,priceData,cartId);
    }
  return <div className={style.cartmain}>
  <div className={style.cartitemsmain}>
    <Addressform isAddressValidAdded={isAddressValidAdded}/>
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
        {priceData.totalMrp}
      </span>
    </div>
    <div>
      <span>
        Discount on MRP
      </span>
      <span>
      {priceData.totalDiscountOnMrp}
      </span>
    </div>
    {allowPayment && 
    <div>
      <span>
        Delivery charges
      </span>
      <span>
        {shippingPrice}
      </span>
    </div>
    }
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
        {allowPayment ? priceData.totalAmount + shippingPrice : priceData.totalAmount}
      </span>
    </div>
  </div>
  <div onClick={proceedPayment} className={`${style.placeorderbtn} ${paymentBtnClass}`}>
  <div>Make Payment</div>
  </div>
  </div>
  {!allowPayment && <div className={style.deliverytext}>Please add your address to know the final amount including delivery charges.</div>}
  </div>
</div>
}

export default Address