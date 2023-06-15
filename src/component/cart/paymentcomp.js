import React, { Fragment, useRef, useState } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import style from '../cart/order.module.css'

import axios from "axios";

const Paymentcomp = () => {
  const stripe = useStripe();
  const [error,setError] = useState("");
  const elements = useElements();
  const payBtn = useRef(null);
  const navigate = useNavigate();
  const orderData = {}
  const addOrder = async () => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/order`,
        orderData,
        config
      );
      navigate('/success')
    } catch (error) {
      setError("Unable to place your order.Money will be refunded in your account if it is deducted. Sorry for the inconvience.")
    }
    
  }
  const paymentData = {
    amount: Math.round(333 * 100),
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: "Neha",
            email: "neha@gmail.com",
            address: {
              line1: "Prem nagar",
              city: "Kalyan",
              state: "maharashtra",
              postal_code: 421005,
              country: "IN",
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;
        setError("Unable to confirm your payment status. Money will be refunded in your account if it is deducted. Sorry for the inconvience.")
      } else {
        if (result.paymentIntent.status === "succeeded") {
          addOrder()
        } else {
          setError("There is some issue occur in your payment status. Money will be refunded in your account if it is deducted. Sorry for the inconvience.")
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      setError("Technical glitch occur in your payment process. Sorry for the inconvience.")
    }
  };

  return (
    <div className={style.paymentmain}>
      {error !== "" ? <p>{error}</p> : 
      <div className={style.paymentcontainer}>
        <form className={style.paymentForm} onSubmit={(e) => submitHandler(e)}>
          <div className={style.paymentinput}>
            <CardNumberElement  />
          </div>
          <div className={style.paymentinput}>
            <CardExpiryElement  />
          </div>
          <div className={style.paymentinput}>
            <CardCvcElement  />
          </div>
          <div className={style["text-align-center"]}>
          <input
            type="submit"
            value={`Pay - ₹$30000`}
            ref={payBtn}
            className={style.paymentinputbtn}
          />
          </div>
        </form>
      </div>
      }
    </div>
  );
};

export default Paymentcomp;