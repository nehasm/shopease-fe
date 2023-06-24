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
  return  <div className={style.errormain}>
    <div className={style.errorcontainer}>
        <div className={style.errortext}>
          <div>{`${props.message} due to ${props.error.message}`}</div>
          <div>Please click the below button to move back to home page</div>
        </div>
        <div className={style.errorBtn}>
          <button onClick={moveBtn}>Home Page</button>
        </div>
    </div>
  </div>
}

export default Error