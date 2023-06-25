import React from 'react';
import style from './common.module.css';
import { useNavigate } from 'react-router-dom';

const Error = (props) => {
  const navigate = useNavigate()
 const moveBtn = () => {
  if(props.navigateToHomePage) {
    navigate('/')
  }
 }
 const errormainClass = props.inProfileRoute ? `${style.errormain} ${style.inprofile}` : `${style.errormain}`;
 const errorContainerClass = props.inProfileRoute ? `${style.errorcontainer} ${style.inprofilecontainer}` : `${style.errorcontainer}`;
  return  <div className={errormainClass}>
    <div className={errorContainerClass}>
        <div className={style.errortext}>
          <div className={style.errormsg}>
          {`${props.message}. Please find the reason below.`}
          </div>
          <div className={style.errorreason}>
          {`Reason : ${props.error?.response?.data?.error?.message}`}
          </div>
          <div>Please click the below button to move back to home page</div>
        </div>
        <div className={style.errorBtn}>
          <button onClick={moveBtn}>Home Page</button>
        </div>
    </div>
  </div>
}

export default Error