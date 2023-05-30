import React from 'react'
import "./login.scss"

const Login = () => {
  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="/logo.png" alt="" />
            </div>
        </div>      
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or Phone Number'/>
                <input type="password" placeholder='Password' />
                <button className='signin'>Sign In</button>
                <span>New to Marvelflix? <b>Sign Up now</b></span>
            </form>
        </div>
    </div>
  )
}

export default Login
