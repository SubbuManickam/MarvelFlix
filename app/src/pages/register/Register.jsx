import React, { useRef, useState } from 'react'
import "./register.scss"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from "react-toastify";
import validator from "validator";

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    
    const navigate = useNavigate(); 

    const emailRef = useRef()
    const passwordRef = useRef()
    const userNameRef = useRef()

    const handleProceed = () => {
        if(!emailRef.current.value) {
            return toast.error('Email Address cannot be empty!');
        } 
        if(!validator.isEmail(emailRef.current.value)) {
            return toast.error('Enter a valid Email Address!')
        } 
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e) => {
        e.preventDefault();
        if(!userNameRef.current.value || !passwordRef.current.value) {
            return toast.error('Username or Password cannot be empty!');
        }
        try{
            await axios.post("auth/register", {userName, email, password},
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                  },
            }).then(response => {
                if(response.status === 201) {
                    toast.success("Successfully Registered!");
                    navigate("/login");
                } else {
                    toast.error("Register Again!");
                    setEmail("");
                    navigate("/register");
                }
            }).catch(() => {
                toast.error("Register Again!");
                setEmail("");
                navigate("/register");
            });
            // response.status === 201 ? toast.success("Successfully Registered!") : toast.error("Register Again!"));
            // navigate("/login");
        } catch (err) {

        }
    }

    const navigateSignin = () => {
        navigate("/login");
    }

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="/logo.png" alt="" />
                <button className='signin' onClick={navigateSignin}>Sign In</button>
            </div>
        </div>      
        <div className="container">
            <h1>One stop for all content Marvel.</h1>
            <h2>Watch anywhere. Cancel at anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            {
                !email ? (
                    <div className="input">
                        <input type="email" placeholder='Email Address' ref={emailRef}/>
                        <button className='proceed' onClick={handleProceed}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="userName" placeholder='Username' onInput={e => setUserName(e.target.value)} ref={userNameRef}/>
                        <input type="password" placeholder='Password' onInput={e => setPassword(e.target.value)} ref={passwordRef}/>
                        <button className='proceed' onClick={handleFinish}>Start</button>
                    </form>
                )
            }
        </div>
    </div>
  )
}

export default Register;
