import axios from "axios";

export const getStripeKey = async () => {
    return await axios.get("/api/v1/stripeapikey");
  }
