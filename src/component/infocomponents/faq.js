import React from 'react';
import style from './infocomp.module.css';

const Faq = () => {
  return <div className={style.infocontainer}>
    <div className={style.infoheading}>
    Frequently Asked Questions (FAQ)
    </div>
    <div className={style.infotext}>
        <ul>
        How do I place an order?
        <li>
        To place an order, simply browse our website, select the desired products, and add them to your shopping cart. Proceed to the checkout page, provide the required information, and complete the payment process. Once your order is confirmed, you will receive an order confirmation email.
        </li>
        </ul>
        
        <ul>
        What payment methods do you accept?
        <li>
        We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options. During the checkout process, you will see the available payment methods for your convenience.

        </li>
        </ul>
        
        <ul>
        How long will it take to receive my order?
        <li>
        The delivery time depends on your location and the shipping method selected. We strive to process and ship orders within [X] business days. Once your order is shipped, you will receive a shipping confirmation email with tracking information. You can track the progress of your shipment using the provided tracking number.
        </li>
        </ul>

        <ul>
        What is your return policy?
        <li>
        We want you to be completely satisfied with your purchase. If you are not happy with your order, please refer to our Return Policy for detailed instructions on how to initiate a return or exchange. Please note that certain products may have specific return conditions and limitations.
        </li>
        </ul>


        <ul>
        How can I track my order?
        <li>
        Once your order is shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number to track the status and location of your package. Simply visit the shipping carrier's website and enter the tracking number in the designated tracking tool.

        </li>
        </ul>

        <ul>
        Do you offer international shipping?
        <li>
        Yes, we offer international shipping to select countries. During the checkout process, you can enter your shipping address to check if we deliver to your location. Please note that international shipping may be subject to customs duties, taxes, and import fees, which are the responsibility of the recipient.

        </li>
        </ul>

        <ul>
        What if I receive a damaged or defective product?
        <li>
        If you receive a damaged or defective product, please contact our customer support team immediately. Provide detailed information and, if possible, include photos of the damaged item. We will promptly assist you and provide a suitable solution, such as a replacement, refund, or repair, depending on the circumstances.

        </li>
        </ul>

        <ul>
        How can I contact customer support?
        <li>
        You can reach our customer support team by [Phone: Provide contact number], [Email: Provide contact email], or [Live Chat: Specify availability hours and link]. We are available to assist you with any questions, concerns, or inquiries you may have. Our team strives to provide timely and helpful support.

        </li>
        </ul>

        <ul>
        Are my personal and payment details secure?
        <li>
        We take the security and privacy of your personal and payment information seriously. Our website utilizes secure socket layer (SSL) encryption to protect your data during transmission. We also adhere to strict privacy practices as outlined in our Privacy Policy.

        </li>
        </ul>

        <ul>
        Do you offer discounts or promotions?
        <li>
        Yes, we periodically offer discounts, promotions, and special offers. Stay updated by subscribing to our newsletter and following us on social media. Additionally, keep an eye out for promotional banners or announcements on our website.

        </li>
        </ul>
        
    </div>
  </div>
}

export default Faq