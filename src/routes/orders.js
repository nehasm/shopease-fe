import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../component/common/loader';
import OrderedItem from '../component/cart/ordereditem';
import { useDispatch } from 'react-redux';
import { getAllOrders, clearOrderError } from '../service/order';
import style from '../component/cart/order.module.css';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png';
import {BsArrowLeft} from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from '../component/products/reviewform';
import { addReview } from '../service/products';
import Error from '../component/common/error'

const Orders = () => {
    const {orders,error,isError, loading} = useSelector(state => state.order);
    const [productId, setProductId] = useState("");
    const [openModal,setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
      if(isError) {
        dispatch(clearOrderError())
      }
        dispatch(getAllOrders())
    },[])
    const moveToHomePage = () => {
      return navigate('/');
    }
    const openModelHandler = (id) => {
      setProductId(id);
      setOpenModal(true);
    }
    const submitReviewHandler = (data) => {
      data.productId = productId;
      dispatch(addReview(data));
      setProductId("");
      handleClose();
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
  {loading ? <Loader/> : isError ? <Error message="Sorry! We are unable to fetch your order items" error={error} navigateToHomePage={true}/> : orders.length > 0 ? 
  <div>
    {orders.map(order => <OrderedItem openModelHandler={openModelHandler} order={order}/>)}
  </div> : <div className={style["no-item-text"]}>No order history present</div>}
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