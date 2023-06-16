import React from 'react';
import style from './successorder.module.css';
import { useNavigate } from 'react-router-dom';
import {GiCheckMark} from 'react-icons/gi'

const SuccessOrder = () => {
    const navigate = useNavigate()
    const moveToHomePage = () => {
        navigate('/');
    }
  return <div className={style.successcontainer}>
    <div className={style.successmain}>
        <div className={style.tickicon}>
            <GiCheckMark />
        </div>
        <div className={style.successtext}>
            <span>Your order has been placed successfully!</span>
        </div>
        <div className={style.successbtn}>
            <button onClick={moveToHomePage}>Go to Home Page</button>
        </div>
    </div>
  </div>
};

export default SuccessOrder;
