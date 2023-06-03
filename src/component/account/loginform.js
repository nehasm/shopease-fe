import React from 'react';
import useInput from '../../hooks/useinput';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
    const {value:email,valueIsValid:emailIsValid ,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,reset:emailReset} = useInput('is_not_empty');
    const {value:password,valueIsValid:passwordIsValid ,hasError:passwordHasError,valueChangeHandler:passwordChangeHandler,inputBlurHandler:passwordBlurHandler,reset:passwordReset} = useInput('is_not_empty');

    let formIsValid = false;
    if( emailIsValid && passwordIsValid ){
        formIsValid = true;
    }
    const loginHandler = (e) => {
        e.preventDefault();
        if(!formIsValid) return;
        props.loginUser(email,password);
        emailReset();
        passwordReset();
    }
  return <div>
  <form onSubmit={loginHandler}>
      <div>
          <label>Email</label>
          <input type='email' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
          {emailHasError && <p>Please enter a valid email address.</p>}
      </div>
      <div>
          <label>Password</label>
          <input type='password' value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}/>
          {passwordHasError && <p>Please enter your password.</p>}
      </div>
      <div>
      <button disabled={!formIsValid} type='submit'>Login</button>
      </div>
      <Link to={'/forgotpassword'}><span>Forgot Password?</span></Link>
  </form>
</div>
}

export default LoginForm