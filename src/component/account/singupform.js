import React from 'react';
import useInput from '../../hooks/useinput';

const SignUpForm = (props) => {
    const {value:name,valueIsValid:nameIsValid ,hasError:nameHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler,reset:nameReset} = useInput('is_not_empty');
    const {value:email,valueIsValid:emailIsValid ,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,reset:emailReset} = useInput('is_email_and_not_empty');
    const {value:password,valueIsValid:passwordIsValid ,hasError:passwordHasError,valueChangeHandler:passwordChangeHandler,inputBlurHandler:passwordBlurHandler,reset:passwordReset} = useInput('is_password_and_not_empty');
    let formIsValid = false;
    if(nameIsValid && emailIsValid && passwordIsValid) {
        formIsValid = true;
    }
    const signUpHandler = (e) => {
        e.preventDefault();
        props.signUpUser({
            name,
            email,
            password
        })
        emailReset();
        passwordReset();
        nameReset();
    }
  return    <div>
                <form onSubmit={signUpHandler}>
                    <div>
                        <label>Name</label>
                        <input type='text' value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                        {nameHasError && <p>Please enter your name.</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
                        {emailHasError && <p>Please enter a valid email address.</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}/>
                        {passwordHasError && <p>Password cannot be less than 8 characters.</p>}
                    </div>
                    <button disabled={!formIsValid} type='submit'>Sign Up</button>
                </form>
            </div>
}

export default SignUpForm