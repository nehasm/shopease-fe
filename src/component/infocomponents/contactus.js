import React from 'react';
import style from './infocomp.module.css';

const Contactus = () => {
  return <div className={style.infocontainer}>
    <div className={style.infoheading}>
        Contact Us
    </div>
    <div className={style.infotext}>

    We value your feedback, inquiries, and suggestions. Our dedicated customer support team is here to assist you with any questions or concerns you may have. Please don't hesitate to reach out to us through any of the following channels:

    <div>Customer Support:</div>
    <ul>Our customer support representatives are available to assist you Monday through Friday, from 9:00 AM to 6:00 PM (local time). Whether you need help with product information, order tracking, returns, or any other inquiries, we're here to provide you with prompt and helpful assistance.</ul>
    <ul>
        <li>
        Email: Send us an email at nehamalvia2022@gmail.com. We strive to respond to all inquiries within 24 hours.

        </li>
        <li>
        Live Chat: Chat with one of our customer support agents in real-time by visiting our website and clicking on the live chat feature during our business hours.

        </li>
        <li>
        Sales Inquiries: For any questions related to product availability, bulk orders, or partnership opportunities, our sales team is ready to assist you.

        </li>
    </ul>
    <ul>
        <li>
        Email: Contact our sales team at nehamalvia2022@gmail.com.
        </li>
        <li>
        Business Inquiries: If you have any business-related inquiries or would like to explore potential collaborations, please email us at [Business Email Address].

        </li>
        <li>
        Social Media:Stay connected with us on social media for the latest updates, promotions, and behind-the-scenes content.

        </li>
    </ul>

    <div>
    Follow us on Facebook, Twitter, and Instagram: We appreciate your engagement and look forward to hearing from you. Your satisfaction is our priority, and we are committed to providing you with exceptional service.
        </div>

    </div>
  </div>
}

export default Contactus