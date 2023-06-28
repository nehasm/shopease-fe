import React from 'react';
import style from './order.module.css';
import { RxCross2 } from 'react-icons/rx'


const Wishlist = (props) => {
    const removeProductFromWishListHandler = () => {
        return props.removeProductFromWishList(props.product.product);
    }
  return <div className={`${style.cartitem} ${style.wishlistcartitem}`}>
<div className={style.wishlistdata}>
<div className={style.productimg}>

<span className={style["product-card-img"]} style={{backgroundImage: `url(${props.product.image})`}}>
    </span>
</div>
<div className={style.wishlistdesc}>
    <div >
        <span className={style.cartitemtitle}>{props.product.name}</span>
    <div className={style.cartitemprice}>
    <span>{`₹${props.product.price}`}</span>
    </div>
    <div className={style.removebtn}>
        <button onClick={removeProductFromWishListHandler}>Remove</button>
    </div>
    </div>
</div>
</div>

  <div className={style.wishlistcross}>
  <RxCross2 onClick={removeProductFromWishListHandler}/>
  </div>

  </div>
  
  
  
}

export default Wishlist