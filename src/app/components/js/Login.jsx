import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'

import '../css/Login.css'


function Login() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleFormSubmit = async (event) => {



  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='login'>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <form className='' onSubmit={handleFormSubmit}>
                <label className="label" aria-hidden="true">Login Page</label>
                <input required name="username" type="text" id="username"
                  value={formData.username} onChange={handleInputChange} className='form-control' placeholder='Email Id' />
                <input required name="password" type="password" id="password" value={formData.password}
                  onChange={handleInputChange} className='form-control' placeholder='Password' />
                <h6 className='forgot-password'>
                  <NavLink 
                  // style={{ color: 'rgb(199, 98, 98)' }} 
                  className={({isActive})=>
                  `${isActive ? "link-color": "nav-link"}`
                } to={'/forgotPassword'}>Forgot Password</NavLink>
                </h6>
                <button id='submitLogin' className='button mt-5 form-control'>Login</button>
                <button type="reset" className='button mt-3 form-control'  >Sign Up</button>
                {/* <h6 className='forgot-password'><Link style={{ color: 'red' }} to={'/forgotPassword'}>Sign Up</Link></h6> */}
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login