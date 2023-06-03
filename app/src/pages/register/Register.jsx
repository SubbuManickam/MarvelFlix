import React, { useRef, useState } from 'react'
import "./register.scss"

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleProceed = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="/logo.png" alt="" />
                <button className='signin'>Sign In</button>
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
                        <input type="password" placeholder='Password' ref={passwordRef}/>
                        <button className='proceed' onClick={handleFinish}>Start</button>
                    </form>
                )
            }
        </div>
    </div>
  )
}

export default Register
