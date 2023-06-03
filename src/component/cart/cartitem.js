import React from 'react'

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
  return (
    <div>{props.cartItem.name}
    <button onClick={decreaseQuantity}>-</button>
    <span>{props.cartItem.quantity}</span>
    <button onClick={increaseQuantity}>+</button>
    <button onClick={removeProduct}>Remove</button>
    </div>
  )
}

export default CartItem