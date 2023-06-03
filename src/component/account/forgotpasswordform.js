import React, { useState } from 'react';
import useInput from '../../hooks/useinput';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../service/user'

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
  return <div className='login-main'>
      <form onSubmit={continueForgotPassword}>
      <div>
          <label>Email</label>
          <input type='email' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
          {emailHasError && <p>Please enter a valid email address.</p>}
      </div>
      <div>
      <button disabled={!emailIsValid} type='submit'>Login</button>
      </div>
  </form>
    {message && <p>{message}</p>}
  </div>
}

export default ForgotPasswordForm