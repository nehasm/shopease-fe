import React from 'react'

const OrderedItem = (props) => {
  return <>
    {props.order.orderItems.map(product => <div>
        {product.name}
    </div>)}
    </>
  
}

export default OrderedItem