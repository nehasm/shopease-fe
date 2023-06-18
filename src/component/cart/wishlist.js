import React from 'react';
import style from './order.module.css';
import { RxCross2 } from 'react-icons/rx'


const Wishlist = (props) => {
    const removeProductFromWishListHandler = () => {
        return props.removeProductFromWishList(props.product.product);
    }
    const priceWithNoDiscount = 500;
    const discount = 80;
  const moveToCart = () => {
      
  }
  return <div className={`${style.cartitem} ${style.wishlistcartitem}`}>
  <div className={style.productimg}>
  <span className={style["product-card-img"]} style={{backgroundImage: `url(${props.product.image})`}}>
      </span>
  </div>
  <div className={style.wishlistdesc}>
      <div >
          <span className={style.cartitemtitle}>{props.product.name}</span>
      <div className={style.cartitemprice}>
      <span>{`₹${props.product.price}`} <span className={style["price-without-discount-text"]}>{`₹${priceWithNoDiscount}`}</span> {`(${discount}%)`}</span>
      </div>
      <div className={style.removebtn}>
          <button onClick={removeProductFromWishListHandler}>Remove</button>
          <button onClick={moveToCart}>Add to Cart</button>
      </div>
      </div>
  </div>
  <div className={style.wishlistcross}>
  <RxCross2 onClick={removeProductFromWishListHandler}/>
  </div>

  </div>
  
  
  
}

export default Wishlist