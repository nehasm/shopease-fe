import React, { Fragment, useRef, useState } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Paymentcomp = () => {
  const stripe = useStripe();
  const [error,setError] = useState("");
  const elements = useElements();
  const payBtn = useRef(null);
  const navigate = useNavigate();


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
    <Fragment>
      {error !== "" ? <p>{error}</p> : 
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <div>
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - ₹$30000`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
      }
    </Fragment>
  );
};

export default Paymentcomp;