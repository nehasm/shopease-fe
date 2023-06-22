import React from 'react';
import style from './infocomp.module.css';

const Paymentpolicy = () => {
  return <div className={style.infocontainer}>
    <div className={style.infoheading}>
        Payment Policy
    </div>
    <div className={style.infotext}>
    <div>
    Thank you for choosing ShopEase. This Payments Policy outlines important information regarding accepted payment methods, transaction security, and related details. By making a purchase on our website, you agree to the terms outlined below.
    </div>
    <ul>
    Credit and Debit Cards:
    <li>
    We accept major credit and debit cards, including Visa, Mastercard, American Express, and Discover. Please ensure that your card is valid and has sufficient funds for the transaction.
    Digital Wallets: We support popular digital wallets such as Apple Pay, Google Pay, and PayPal. You can conveniently use these services for a seamless checkout experience.
    Bank Transfers: In select cases, we may offer bank transfer options. Please contact our customer support team for further instructions if you wish to use this payment method.
    Other Methods: We may offer additional payment methods based on your location or specific promotions. These options will be displayed during the checkout process.
    </li>
    </ul>
    <ul>
    Transaction Security:
    <li>
    a. We prioritize the security of your payment information and use industry-standard security measures to protect your data. We employ encryption and secure socket layer (SSL) technology to safeguard your transactions.
    </li>
    <li>
    b. During the checkout process, your payment information is securely transmitted to our payment service providers for processing. We do not store your complete payment information on our servers.
    </li>
    </ul>

    <ul>
    Order Verification:
    <li>
    a. In certain cases, we may perform additional verification checks for your order to prevent fraud or unauthorized transactions. This may involve requesting additional information or documentation from you. We appreciate your cooperation in such instances to ensure a secure shopping experience.
    </li>
    </ul>

    <ul>
    Currency and Pricing:
    <li>
    a. The default currency for our website is rupees. Prices for products and shipping are displayed in this currency unless otherwise specified. If you are shopping from a different country, currency conversion rates may apply. Please note that any applicable currency conversion fees are the responsibility of the customer.
    </li>
    </ul>
    <ul>
    Payment Disputes and Refunds:
    <li>
    a. In the event of a payment dispute or if you believe you have been charged incorrectly, please contact our customer support team immediately. We will investigate the matter and work towards a resolution. If a refund is warranted, it will be processed according to our refund policy.

    </li>
    </ul>

    
    <ul>
    Payment Gateway Providers:
    <li>
    a. We partner with reputable payment gateway providers to process your payments securely. These providers adhere to their own terms of service and privacy policies. By using their services, you agree to their respective terms and conditions.

    </li>
    </ul>
    <ul>
    Changes to Payments Policy:
    <li>
    We reserve the right to update or modify this Payments Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website.
    We recommend reviewing this policy periodically for any updates. By continuing to use our website after changes have been made, you indicate your acceptance of the revised terms.
    </li>
    </ul>


    </div>
  </div>
}

export default Paymentpolicy