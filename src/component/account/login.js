import React, {useState } from 'react';
import LoginForm from './loginform';
import SignUpForm from './singupform';
import { useDispatch } from 'react-redux';
import { userLogin, userSignUp } from '../../service/user';
import { useNavigate } from 'react-router-dom';
import style from './login.module.css'

const Login = () => {
    const [tab,setTab] = useState("login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const switchTabs = (e,val) => {
        e.preventDefault();
        setTab(val);
    }
    const loginUser = (email,password) => {
        dispatch(userLogin(email,password))
        navigate('/');
    }
    const signUpUser = (data) => {
        dispatch(userSignUp(data));
        navigate('/');
    }
    const loginClasses = tab === "login" ? style.active : "";
    const signupClasses = tab === "signup" ? style.active : "";
  return  <div className={style['login-main']}>
        <div>
        <div className={style.headertab}>
            <span className={loginClasses} onClick={(e) => switchTabs(e,"login")} >Login</span>
            <span className={signupClasses} onClick={(e) => switchTabs(e,"signup")}>Signup</span>
        </div>
        { tab === "login" ? <LoginForm loginUser={loginUser}/> : <SignUpForm signUpUser={signUpUser}/>}
        </div>
    </div>
}

export default Login