import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../component/common/loader';
import OrderedItem from '../component/cart/ordereditem';
import { useDispatch } from 'react-redux';
import { getAllOrders } from '../service/order';
import style from '../component/cart/order.module.css';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png';
import {BsArrowLeft} from 'react-icons/bs';


const Orders = () => {
    const {orders,error,loading} = useSelector(state => state.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])
    const moveToHomePage = () => {
      return navigate('/');
    }
  return <div>
    <div className={style.cartheader}>
      <BsArrowLeft onClick={moveToHomePage}/>
      <span >
      <img  src={icon} alt='emall' />
      </span>
    </div>
    <div className={style.ordermain}>
  {loading ? <Loader/> : <div>
    {orders.map(order => <OrderedItem order={order}/>)}
  </div>}
  </div>
  </div>
  

}

export default Orders