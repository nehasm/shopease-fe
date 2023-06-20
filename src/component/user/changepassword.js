import React, { useState } from 'react';
import useInput from '../../hooks/useinput';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../service/user';
import { useDispatch } from 'react-redux';
import fromstyle from '../account/login.module.css';
import style from './profile.module.css'


const ChangePassword = () => {
    const [passwordNotMatched,setPasswordNotMatched] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {value:oldPassword,valueIsValid:oldPasswordIsValid ,hasError:oldPasswordHasError,valueChangeHandler:oldPasswordChangeHandler,inputBlurHandler:oldPasswordBlurHandler,reset:oldPasswordReset} = useInput('is_password_and_not_empty');
    const {value:newPassword,valueIsValid:newPasswordIsValid ,hasError:newPasswordHasError,valueChangeHandler:newPasswordChangeHandler,inputBlurHandler:newPasswordBlurHandler,reset:newPasswordReset} = useInput('is_password_and_not_empty');
    const {value:confirmPassword,valueIsValid:confirmPasswordIsValid ,hasError:confirmPasswordHasError,valueChangeHandler:confirmPasswordChangeHandler,inputBlurHandler:confirmPasswordBlurHandler,reset:confirmPasswordReset} = useInput('is_password_and_not_empty');
    const passwordIsValid = oldPasswordIsValid && newPasswordIsValid && confirmPasswordIsValid;
    const changePasswordHandler = (e) => {
        e.preventDefault();
        if(newPassword === confirmPassword){
            dispatch(changePassword({oldPassword,newPassword,confirmPassword}))
            setPasswordNotMatched(false);
            oldPasswordReset();
            newPasswordReset();
            confirmPasswordReset();
            navigate('/profile')
        }
        setPasswordNotMatched(true);
    }
  return <div className={style.profilesectionman}>
  <div className={style.tabHeading}>
    <h2>CHANGE PASSWORD</h2>
  </div>
  <div className={`${fromstyle.loginform} ${style.tabmainarea}`}>
        <form onSubmit={changePasswordHandler}>
      <div className={fromstyle["form-group"]}>
          <label>Old Password</label>
          <input type='password' value={oldPassword} onChange={oldPasswordChangeHandler} onBlur={oldPasswordBlurHandler}/>
          {oldPasswordHasError && <p>Password cannot be less than 8 characters.</p>}
      </div>
      <div className={fromstyle["form-group"]}>
          <label>New Password</label>
          <input type='password' value={newPassword} onChange={newPasswordChangeHandler} onBlur={newPasswordBlurHandler}/>
          {newPasswordHasError && <p>Password cannot be less than 8 characters.</p>}
      </div>
      <div className={fromstyle["form-group"]}>
          <label>Confirm Password</label>
          <input type='password' value={confirmPassword} onChange={confirmPasswordChangeHandler} onBlur={confirmPasswordBlurHandler}/>
          {confirmPasswordHasError && <p>Password cannot be less than 8 characters.</p>}
      </div>
      {passwordNotMatched && <p>New Password must match to the confirm Password</p>}
      <div className={fromstyle["form-group"]}>
      <button disabled={!passwordIsValid} type='submit'>Change Password</button>
      </div>
  </form>
  </div>
  </div>
}

export default ChangePassword