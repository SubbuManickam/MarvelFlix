import React, { useContext, useState } from 'react'
import "./login.scss"
import { AuthContext } from '../../components/context/authContext/AuthContext';
import { login } from '../../components/context/authContext/apiActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useContext(AuthContext);

    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password}, dispatch);
    };
    
    const navigateRegister = () => {
        navigate("/register");
    }

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
                <input type="email" placeholder='Email or Phone Number' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button className='signin' onClick={handleLogin}>Sign In</button>
                <span>New to Marvelflix? <b onClick={navigateRegister}>Sign Up now</b></span>
            </form>
        </div>
    </div>
  )
}

export default Login
