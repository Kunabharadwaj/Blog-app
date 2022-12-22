import React from 'react'
import {Link} from 'react-router-dom'
 
function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username'/>
        <input required type="text" placeholder='password'/>
        <input required type="text" placeholder='email'/>
        <button>Register</button>
        <p>This is an error!</p>
        <span>Do you have an account? <Link to='/Login'>Login</Link></span>
      </form>

    </div>
  )
}

export default Register