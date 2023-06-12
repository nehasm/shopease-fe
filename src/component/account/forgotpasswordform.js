import React, { useState } from 'react';
import useInput from '../../hooks/useinput';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../service/user'
import style from './login.module.css';

const ForgotPasswordForm = (props) => {
    const [message,setMessage] = useState("");
    const dispatch = useDispatch();
    const {value:email,valueIsValid:emailIsValid ,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,reset:emailReset} = useInput('is_not_empty');
    const continueForgotPassword = () => {
        if ( emailIsValid ) {
            dispatch(forgotPassword({email}));
            emailReset();
            setMessage("Please check your mail. We have sent you a reset password link.")
        }
    }
  return  <div className={style['login-main']}>
    <div>
  <div className={style.loginform}>
      <form onSubmit={continueForgotPassword}>
      <div className={style["form-group"]}>
          <label>Email *</label>
          <input type='email' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
          {emailHasError && <p>Please enter a valid email address.</p>}
      </div>
      <div className={style["form-group"]}>
      <button disabled={!emailIsValid} type='submit'>Login</button>
      </div>
  </form>
    {message && <p>{message}</p>}
  </div>
  </div>
  </div>
}

export default ForgotPasswordForm