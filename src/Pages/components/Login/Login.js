import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <p>Login to access your account and e-learning modules</p>        
        <div className='login-section'>
            <div className='login-section-inputs'>
                <input type="email" name="email" className='login-section-input' placeholder='Email address'/>
                <input type="password" name="password" className='login-section-input' placeholder='Password'/>
                <input type="submit" className='login-section-btn'/>
                <div>Forgot Password?</div>
            </div>

        </div>

    </div>
  )
}

export default Login