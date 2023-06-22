import React from 'react';
import style from './infocomp.module.css';

const Trackorder = () => {
  return <div className={style.infocontainer}>
    <div className={style.infoheading}>
        Track Order
    </div>
    <div className={style.infotext}>
    <div>
    Thank you for shopping with ShopEase. We understand the importance of knowing the status and whereabouts of your order. Tracking your order is quick and easy. Follow the steps below to track your package:

    </div>

    <ul>
    Order Tracking Page:
    <li>
    a. Visit our website and locate the "Track Order" page. You can usually find it in the top navigation menu or the footer section of our website.
    </li>
    <li>
    b. Click on the "Track Order" link to access the tracking page.
    </li>
    </ul>
    

    <ul>
    Enter Tracking Information:
    <li>
    a. On the tracking page, enter your order number and the email address associated with your order. These details were provided to you in the order confirmation email.
    </li>
    <li>
    b. If you don't have an order number, check your email for the order confirmation email or contact our customer support team for assistance.
    </li>
    </ul>
    
    <ul>View Order Status:
      <li>
      a. After entering the required information, click on the "Track" or "Submit" button to retrieve your order status.
      </li>
      <li>
      b. The tracking system will display the current status of your order, including information such as shipping carrier, tracking number, and the estimated delivery date.
      </li>
    </ul>

    <ul>
    Shipment Tracking:
    <li>a. Use the provided tracking number to track your shipment on the website of the shipping carrier.</li>
    <li>b. Click on the tracking number or the carrier's name to be redirected to their website.</li>
    <li>c. On the carrier's website, enter the tracking number to access detailed tracking information, including package location, transit updates, and delivery status.</li>
    </ul>
    
    <ul>
    Delivery Notifications:
        
    <li>a. Some shipping carriers offer delivery notifications via email, SMS, or mobile app. If you provided your contact information during checkout, you may receive updates about your package's progress and estimated delivery time.</li>
    <li>b. Please note that delivery notifications are dependent on the services provided by the shipping carrier and may vary.</li>
    </ul>
    
    <ul>
    Need Assistance?
    <li>
    a. If you encounter any issues with tracking your order or have any questions, our customer support team is here to help.
    </li>
    <li>
    b. Contact our customer support through [Phone: Provide contact number], [Email: Provide contact email], or [Live Chat: Specify availability hours and link]. Please provide your order details, and we will assist you in tracking your package and addressing any concerns.
    </li>
    </ul>
  
    </div>
  </div>
}

export default Trackorder