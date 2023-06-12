import React from 'react';
import useInput from '../../hooks/useinput';
import { Link } from 'react-router-dom';
import style from './login.module.css'

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
  return <div className={style.loginform}>
  <form onSubmit={loginHandler}>
      <div className={style["form-group"]}>
          <label>Email *</label>
          <input type='email' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
          {emailHasError && <p>Please enter a valid email address.</p>}
      </div>
      <div className={style["form-group"]}>
          <label>Password *</label>
          <input type='password' value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}/>
          {passwordHasError && <p>Please enter your password.</p>}
      </div>
      <div className={style["form-group"]}>
      <button disabled={!formIsValid} type='submit'>Login</button>
      </div>
      <Link to={'/forgotpassword'}><span className={style.forgotpassword}>Forgot Password?</span></Link>
  </form>
</div>
}

export default LoginForm