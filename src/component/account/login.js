import React, {useState } from 'react';
import LoginForm from './loginform';
import SignUpForm from './singupform';
import { useDispatch } from 'react-redux';
import { userLogin, userSignUp } from '../../service/user';
import { useNavigate } from 'react-router-dom';

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
  return  <div className='login-main'>
        <div>
        <div>
            <span onClick={(e) => switchTabs(e,"login")} >Login</span>
            <span onClick={(e) => switchTabs(e,"signup")}>Signup</span>
        </div>
        { tab === "login" ? <LoginForm loginUser={loginUser}/> : <SignUpForm signUpUser={signUpUser}/>}
        </div>
    </div>
}

export default Login