import React from 'react';
import useInput from '../../hooks/useinput';
import { useNavigate,useParams } from 'react-router-dom';
import {resetPassword } from '../../service/user';
import { useDispatch } from 'react-redux';
import style from './login.module.css';

const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const {value:password,valueIsValid:passwordIsValid ,hasError:passwordHasError,valueChangeHandler:passwordChangeHandler,inputBlurHandler:passwordBlurHandler,reset:passwordReset} = useInput('is_password_and_not_empty');
    const {value:confirmPassword,valueIsValid:confirmPasswordIsValid ,hasError:confirmPasswordHasError,valueChangeHandler:confirmPasswordChangeHandler,inputBlurHandler:confirmPasswordBlurHandler,reset:confirmPasswordReset} = useInput('is_password_and_not_empty');
    const isPasswordValid = passwordIsValid && confirmPasswordIsValid && password === confirmPassword;
    const resetPasswordHandler = () => {
        if(isPasswordValid) {
            dispatch(resetPassword(params,{
                password,
                confirmPassword
            }))
            passwordReset();
            confirmPasswordReset();
            navigate('/')
        }
    }
  return <div className={style['login-main']}>
    <div>

    
  <div className={style.loginform}>
      <form onSubmit={resetPasswordHandler}>
      <div className={style["form-group"]}>
          <label>Password</label>
          <input type='password' value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}/>
          {passwordHasError && <p>Password cannot be less than 8 characters.</p>}
      </div>
      <div className={style["form-group"]}>
          <label>Confirm Password</label>
          <input type='password' value={confirmPassword} onChange={confirmPasswordChangeHandler} onBlur={confirmPasswordBlurHandler}/>
          {confirmPasswordHasError && <p>Password cannot be less than 8 characters.</p>}
      </div>
      <div className={style["form-group"]}>
      <button disabled={!isPasswordValid} type='submit'>Change Password</button>
      </div>
  </form>
  </div>
  </div>
  </div>
}

export default ResetPassword