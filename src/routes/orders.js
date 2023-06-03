import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../component/common/loader';
import OrderedItem from '../component/cart/ordereditem';
import { useDispatch } from 'react-redux';
import { getAllOrders } from '../service/order';

const Orders = () => {
    const {orders,error,loading} = useSelector(state => state.order);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])
  return <>
  {loading ? <Loader/> : orders.map(order => <OrderedItem order={order}/>)}
  </>
}

export default Orders