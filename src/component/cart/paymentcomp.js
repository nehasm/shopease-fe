import React, { Fragment, useRef, useState } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import style from '../cart/order.module.css';
import { useDispatch } from "react-redux";

import axios from "axios";
import { clearCart } from "../../service/cart";
import Loader from "../common/loader";

const Paymentcomp = (props) => {
  const stripe = useStripe();
  const [error,setError] = useState("");
  const dispatch = useDispatch();
  const elements = useElements();
  const payBtn = useRef(null);
  const navigate = useNavigate();
  let cardId = props.cartId;
  let orderRequestObj  = props.orderData;
  orderRequestObj.itemsPrice = props.priceData.totalAmount;
  orderRequestObj.shippingPrice = props.priceData.shippingPrice;
  orderRequestObj.totalPrice = props.priceData.totalAmount + 99;
  const addOrder = async (paymentIntent) => {
    orderRequestObj.paymentInfo = {
      id: paymentIntent.id,
      status: paymentIntent.status
    }
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/order`,
        orderRequestObj,
        config
      );
      if(cardId) {
        dispatch(clearCart(cardId));
      }
      navigate('/success');
    } catch (error) {
      setError("Unable to place your order.Money will be refunded in your account if it is deducted. Sorry for the inconvience.")
    }
    
  }
  const paymentData = {
    amount: Math.round(orderRequestObj.totalPrice),
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
          addOrder(result.paymentIntent);
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
            {payBtn?.current?.disabled ? <Loader/> :
                      <input
                      type="submit"
                      value={`Pay - ${orderRequestObj.totalPrice}`}
                      ref={payBtn}
                      className={style.paymentinputbtn}
                    />
            }

          </div>
        </form>
      </div>
      }
    </div>
  );
};

export default Paymentcomp;