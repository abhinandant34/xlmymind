import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='register'>
    <p>Register Your Account</p>        
    <div className='register-section'>
        <div className='register-section-inputs'>
            <input type="text" name="first_name" className='register-section-input' placeholder='First Name *' required/>
            <input type="text" name="last_name" className='register-section-input' placeholder='Last Name *' required/>
            <input type="text" name="email" className='register-section-input' placeholder='Email Address *' required/>
            <input type="password" name="password" className='register-section-input' placeholder='Password' required/>
            <input type="text" name="address1" className='register-section-input' placeholder='Address Line 1 *' required/>
            <input type="text" name="address2" className='register-section-input' placeholder='Address Line 2 *' required/>
            <input type="text" name="city" className='register-section-input' placeholder='City *' required/>
            <input type="text" name="zipcode" className='register-section-input' placeholder='Zipcode *' required/>
            <input type="number" name="pnum" className='register-section-input' placeholder='Phone Number *' required/>
            <input type="submit" className='register-section-btn'/>
            <div>Forgot Password?</div>
        </div>

    </div>

</div>
  )
}

export default Register