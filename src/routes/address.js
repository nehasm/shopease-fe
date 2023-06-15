import React, { useState } from 'react';
import style from '../component/cart/order.module.css'
import Addressform from '../component/cart/addressform';
import { useOutletContext } from "react-router-dom";

const Address = () => {
    const [allowPayment,setAllowPayment] = useState(false);
    const [changeTab] = useOutletContext()
    let paymentBtnClass = allowPayment ? "" : style.makepaymentbtndisable;
    const isAddressValidAdded = (data) => {
        setAllowPayment(true);
        console.log(data)
    }
    const proceedPayment  = () => {
      changeTab('payment');
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
    {allowPayment && 
    <div>
      <span>
        Delivery charges
      </span>
      <span>
        99
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
        2099
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