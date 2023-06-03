import React, { useEffect } from 'react';
import useInput from '../../hooks/useinput';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProfile} from '../../service/user'

const EditProfile = () => {
const { user,error,loading} = useSelector((state) => state.user);
const navigate = useNavigate()
const dispatch = useDispatch();
const {value:name,valueIsValid:nameIsValid ,hasError:nameHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler, setInitialValue:nameSetInitialValue,reset:nameReset} = useInput('is_not_empty',user.name);
const {value:email,valueIsValid:emailIsValid ,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,setInitialValue:emailSetInitialValue,reset:emailReset} = useInput('is_email_and_not_empty',user.email);
const formIsValid = emailIsValid && nameIsValid;
useEffect(()=> {
    nameSetInitialValue();
    emailSetInitialValue();
},[])
const editProfileHandler = () => {
    if( formIsValid ){
        dispatch(updateProfile({name,email}))
        nameReset();
        emailReset();
        navigate('/profile')
    }
}
  return <div>
            <form onSubmit={editProfileHandler}>
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
            <button disabled={!formIsValid} type='submit'>Edit Profile</button>
        </form>
  </div>
}

export default EditProfile