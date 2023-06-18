import React from 'react';
import style from './order.module.css';
import { AiFillStar } from 'react-icons/ai';


const OrderedItem = (props) => {
  const date = new Date(props.order.createdAt);
  const openReviewModal = (id) => {
    return props.openModelHandler(id);
  }
  return <>
    {props.order.orderItems.map(product => <div className={style.orderitem}>
          <div className={style.productimg}>
        <span className={style["product-card-img"]} style={{backgroundImage: `url(${product.image})`}}>
            </span>
        </div>
        <div className={style.orderitemtextmain}>
        <div >
            <span className={style.cartitemtitle}>{product.name}</span>
        <div className={style.cartitemprice}>
        <span>{`₹${product.price}`}</span>
        </div>
        <div className={style.orderdate}>
          {`Ordered at : ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`}
        </div>
        <div className={style.textcolorhighlight}>
          {`${props.order.orderStatus} your Order`}
        </div>
        {
          props.order.orderStatus === "Delivered" &&
          <div onClick={(e) => openReviewModal(product.product)} className={style.reviewproduct}>
          <AiFillStar />  <span>Rate & Review Product</span>
        </div>
        }

        </div>
    </div>
    </div>)}
    </>
}

export default OrderedItem