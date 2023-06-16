import React, { useEffect, useState } from 'react';
import { getStripeKey } from '../service/payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Paymentcomp from '../component/cart/paymentcomp';
import { useLocation } from 'react-router-dom';


const Payment = () => {
    const [stripeKey,setStripeKey] = useState("");
    const history = useLocation();
    const orderData = history.state.orderData;
    const priceData = history.state.priceData;
    useEffect(()=>{
        getStripeKey().then((data)=>setStripeKey(data.data.stripeApiKey));
    },[])

  return (
    <Elements stripe={loadStripe(stripeKey)}><Paymentcomp orderData={orderData} priceData={priceData}/></Elements>
  )
}

export default Payment