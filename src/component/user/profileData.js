import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import style from './profile.module.css';
import fromstyle from '../account/login.module.css';
import Loader from '../common/loader';
import Error from '../common/error';
import { useDispatch } from 'react-redux';
import { clearUserError, getUserData } from '../../service/user';


const ProfileData = () => {
  const dispatch = useDispatch();
    const { user,error,loading,isError} = useSelector((state) => state.user);
    useEffect(()=> {
      if(isError) {
        dispatch(clearUserError());
        dispatch(getUserData());
      }
    },[])
  return <>
  {loading ? <Loader /> : isError ? <Error message="Sorry! We are unable to fetch your details" error={error} navigateToHomePage={true} inProfileRoute={true}/> : 
    <div className={style.profilesectionman}>
    <div className={style.tabHeading}>
      <h2>PROFILE</h2>
    </div>
    <div className={`${fromstyle.loginform} ${style.tabmainarea}`}>
      <div >
        <span>Name : </span>
        <span>{user.name}</span>
      </div>
      <div>
        <span>Email : </span>
        <span>{user.email}</span>
      </div>
    </div>
  </div>}
  </>

}

export default ProfileData