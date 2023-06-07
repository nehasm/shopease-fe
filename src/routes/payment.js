import React, { useEffect, useState } from 'react';
import { getStripeKey } from '../service/payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Paymentcomp from '../component/cart/paymentcomp';


const Payment = () => {
    const [stripeKey,setStripeKey] = useState("");
    useEffect(()=>{
        getStripeKey().then((data)=>setStripeKey(data.data.stripeApiKey));
    },[])

  return (
    <Elements stripe={loadStripe(stripeKey)}><Paymentcomp /></Elements>
  )
}

export default Payment