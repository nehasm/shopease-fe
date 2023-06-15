import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import style from './order.module.css';
import icon from '../../assets/icon.png';
import { useNavigate } from 'react-router-dom';

const CheckoutWrapper = () => {
    const [tab,setTab] = useState("summary");
    const navigate = useNavigate();
    const summaryActiveClass = tab === "summary" ? style["chekout-active-tab"] : "";
    const addressActiveClass = tab === "address" ? style["chekout-active-tab"] : "";
    const paymentActiveClass = tab === "payment" ? style["chekout-active-tab"] : "";
    const changeTab = (val) => {
        setTab(val);
        navigate(`/checkout/${val}`)
    }
  return <div>
    <div className={style.checkoutheader}>
        <span className={style.checkoutswitch}>
            <span  className={`${style.checkouttext} ${summaryActiveClass}`}>Order Summary</span> 
            <span> ------------------- </span>
            <span className={`${style.checkouttext} ${addressActiveClass}`}>Address</span>
            <span> ------------------- </span>
            <span className={`${style.checkouttext} ${paymentActiveClass}`}>Payment</span>
        </span>
      <span  className={style["product-icon"]}>
      <img  src={icon} alt='emall' />
      </span>
    </div>
    <div>
    <Outlet context={[changeTab]}/>
    </div>
  </div>

}

export default CheckoutWrapper