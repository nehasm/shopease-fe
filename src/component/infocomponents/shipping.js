import React from 'react';
import style from './infocomp.module.css'

const Shipping = () => {
  return <div className={style.infocontainer}>
    <div className={style.infoheading}>
    Shipping Policy
    </div>
    <div className={style.infotext}>
        <div>
        At ShopEase, we strive to provide efficient and reliable shipping services to deliver your orders in a timely manner. This Shipping Policy outlines important information regarding shipping methods, delivery times, tracking, and related details. By placing an order with us, you agree to the terms outlined below.
        </div>

        <ul>
        Shipping Methods:
        <li>a. We offer several shipping methods, including standard shipping, express shipping, and international shipping. The available shipping methods will be displayed during the checkout process based on your location and the products in your order.</li>
        <li>b. Shipping costs, if applicable, will be calculated based on the weight, dimensions, destination, and shipping method selected.</li>
        </ul>
      
        <ul>
        Order Processing Time:
        <li>a. We strive to process and ship orders within [X] business days after the order is placed. However, please note that order processing time may vary depending on product availability, order volume, and other factors. We will make reasonable efforts to inform you of any significant delays.</li>

        </ul>
        
        <ul>
        Estimated Delivery Time:
                
        <li>a. The estimated delivery time depends on various factors, including the shipping method selected and your location. During the checkout process, you will see an estimated delivery timeframe based on the available shipping options.</li>
        <li>b. Please note that the estimated delivery time is an approximation and not a guaranteed delivery date. Delays may occur due to unforeseen circumstances such as weather conditions, customs inspections, or other factors beyond our control.</li>
        </ul>



        <ul>
        Tracking and Order Status:
        <li>a. Once your order is shipped, you will receive a shipping confirmation email containing a tracking number and instructions on how to track your package.</li>
        <li>b. You can also track the status of your order by logging into your account on our website and accessing the order history section. The tracking information will provide updates on the location and progress of your shipment.</li>
        </ul>
        



        <ul>
        International Shipping:
        <li>a. We offer international shipping to select countries. During the checkout process, you can enter your shipping address to check if we deliver to your location.</li>
        <li>b. International shipping may be subject to customs duties, taxes, and import fees imposed by the destination country. These additional charges are the responsibility of the recipient. Please check with your local customs office for more information on potential fees and regulations.</li>
        </ul>
        


        <ul>
        Shipping Address:
        <li>a. It is your responsibility to provide accurate and complete shipping information, including the recipient's name, shipping address, and contact details. We are not responsible for undelivered packages or delays caused by incorrect or incomplete address information.</li>

        </ul>
        

        <ul>
        Shipping Restrictions:
        <li>a. Certain products may have specific shipping restrictions due to legal or regulatory requirements. These restrictions may include items that are flammable, hazardous, or prohibited for international shipment. Please review the product description or contact our customer support team for any shipping restriction inquiries.</li>

        </ul>
        

        <ul>
        Lost or Damaged Packages:
        <li>a. In the rare event that your package is lost or damaged during transit, please contact our customer support team immediately. We will work with the shipping carrier to investigate the issue and resolve it to the best of our ability. Please note that resolution options may be subject to the shipping carrier's policies and procedures.</li>

        </ul>
        


    </div>
  </div>
}

export default Shipping