import React, { useEffect } from 'react';
import useInput from '../../hooks/useinput';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProfile} from '../../service/user';
import fromstyle from '../account/login.module.css';
import style from './profile.module.css'
import { clearUserError, getUserData } from '../../service/user';
import Error from '../common/error';
import Loader from '../common/loader';

const EditProfile = () => {
const { user,error,loading,isError} = useSelector((state) => state.user);
const navigate = useNavigate()
const dispatch = useDispatch();
const {value:name,valueIsValid:nameIsValid ,hasError:nameHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler, setInitialValue:nameSetInitialValue,reset:nameReset} = useInput('is_not_empty',user?.name);
const {value:email,valueIsValid:emailIsValid ,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,setInitialValue:emailSetInitialValue,reset:emailReset} = useInput('is_email_and_not_empty',user?.email);
const formIsValid = emailIsValid && nameIsValid;
useEffect(()=> {
    nameSetInitialValue();
    emailSetInitialValue();
    if(isError) {
        dispatch(clearUserError());
        dispatch(getUserData());
      }
},[])
const editProfileHandler = () => {
    if( formIsValid ){
        dispatch(updateProfile({name,email}))
        nameReset();
        emailReset();
        navigate('/profile')
    }
}
  return <>
  {loading ? <Loader /> : isError ? <Error message="Sorry! We are unable to fetch your details" error={error} navigateToHomePage={true} inProfileRoute={true}/> : 
    <div className={style.profilesectionman}>
    <div className={style.tabHeading}>
      <h2>EDIT PROFILE</h2>
    </div>
    <div className={`${fromstyle.loginform} ${style.tabmainarea}`}>
              <form onSubmit={editProfileHandler}>
              <div className={fromstyle["form-group"]}>
                  <label>Name</label>
                  <input type='text' value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                  {nameHasError && <p>Please enter your name.</p>}
              </div>
              <div className={fromstyle["form-group"]}>
                  <label>Email</label>
                  <input type='email' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
                  {emailHasError && <p>Please enter a valid email address.</p>}
              </div>
              <div className={fromstyle["form-group"]}>
              <button disabled={!formIsValid} type='submit'>Edit Profile</button>
              </div>
              
          </form>
    </div>
    </div>}
  </>


}

export default EditProfile