import React from 'react'
import style from './order.module.css'

const CartItem = (props) => {
    const increaseQuantity = () => {
        const oldQuanity = props.cartItem.quantity;
        if(oldQuanity < 10) {
            const quantity = {
                "newQuantity" : oldQuanity + 1
            }
            return props.updateQunatity(props.cartItem.product,quantity);
        }
    }
    const decreaseQuantity = () => {
        const oldQuanity = props.cartItem.quantity;
        if(oldQuanity > 1) {
            const quantity = {
                "newQuantity" : oldQuanity - 1
            }
            return props.updateQunatity(props.cartItem.product,quantity);
        }

    }
    const removeProduct = () => {
        return props.removeProductFromCart(props.cartItem.product)
    }
    const priceWithNoDiscount = Math.round(props.cartItem.discount ? props.cartItem.price * 100 / (100 - props.cartItem.discount) : props.cartItem.price);
  return <div className={style.cartitem}>
    <div className={style.productimg}>
    <span className={style["product-card-img"]} style={{backgroundImage: `url(${props.cartItem.image})`}}>
        </span>
    </div>
    <div>
        <div >
            <span className={style.cartitemtitle}>{props.cartItem.name}</span>
        <div className={style.cartitemprice}>
        <span>{`₹${props.cartItem.price}`} <span className={style["price-without-discount-text"]}>{`₹${priceWithNoDiscount}`}</span> {`(${props.cartItem.discount}%)`}</span>
        </div>
        <div className={style.cartquantity}>
            <button onClick={decreaseQuantity}>-</button>
            <span>{props.cartItem.quantity}</span>
            <button onClick={increaseQuantity}>+</button>
        </div>
        <div className={style.removebtn}>
            <button onClick={removeProduct}>Remove</button>
        </div>
        </div>
    </div>
    </div>
}

export default CartItem