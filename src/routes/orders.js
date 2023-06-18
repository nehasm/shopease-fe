import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../component/common/loader';
import OrderedItem from '../component/cart/ordereditem';
import { useDispatch } from 'react-redux';
import { getAllOrders } from '../service/order';
import style from '../component/cart/order.module.css';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png';
import {BsArrowLeft} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from '../component/products/reviewform';


const Orders = () => {
    const {orders,error,loading} = useSelector(state => state.order);
    const [openModal,setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const submitReviewHandler = (data) => {
      console.log(data)
      handleClose();
    }
    const dispatch = useDispatch();
    let productId = "";
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])
    const moveToHomePage = () => {
      return navigate('/');
    }
    const openModelHandler = (id) => {
      productId = id;
      setOpenModal(true);
    }
  return <>
  <div>
    <div className={style.cartheader}>
      <BsArrowLeft onClick={moveToHomePage}/>
      <span >
      <img  src={icon} alt='emall' />
      </span>
    </div>
    <div className={style.ordermain}>
  {loading ? <Loader/> : <div>
    {orders.map(order => <OrderedItem openModelHandler={openModelHandler} order={order}/>)}
  </div>}
  </div>
  </div>
    <Modal show={openModal} onHide={handleClose} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm submitReviewHandler={submitReviewHandler}/>
        </Modal.Body>
      </Modal>
  </>

}

export default Orders