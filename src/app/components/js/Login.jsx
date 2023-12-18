
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Login.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
// import ForgetPassword from '../../pages/view/ForgetPassword';
import axios from 'axios';
import { useLogin } from '../../context/LoginContext';
// import { Box, LinearProgress } from '@mui/material';

const Login = () => {

  const { isLogin, setIsLogin, logout } = useLogin();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);



  // useEffect(() => {

  // }, [])



  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track login status
  var isLoggedIn = false;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {

      if (formData.username == null || formData.username == '') {
        toast('Kindly Enter User Name', {
          position: 'top-center'
        });

      }
      else if (formData.password == null || formData.password == '') {
        toast('Kindly Enter Password', {
          position: 'top-center'
        });
      }
      else {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/generate-token`,
          formData
        );


        const jsonData = await response.data;

        // Handle successful login response

        console.log(jsonData);
        if (jsonData) {

          setLoading(false);

          sessionStorage.setItem('token', jsonData.token);
          sessionStorage.setItem('Role', jsonData.USER.authorities[0].authority)
          // sessionStorage.setItem('loginUser', jsonData.USER);
          // sessionStorage.setItem('loginUser', JSON.stringify(jsonData.USER));
          isLoggedIn = true
          setIsLogin(true)
          // sessionStorage.setItem('isLoggedIn', isLoggedIn);
          //console.log('is logged In : ' + sessionStorage.getItem('loginUser'));
          //console.log('is logged In : ' + sessionStorage.getItem('isLoggedIn'));
          // if (
          //   jsonData.USER.role.roleName == 'Admin'
          // ) {
          //   navigate('/dashboard',JSON.stringify(jsonData.USER))
          // } else {
          //   navigate('/',JSON.stringify(jsonData.USER))
          // }
          navigate('/home')
          // window.location.reload();
          // sessionStorage.clear();
          // sessionStorage.getItem('isLoggedIn');
        }
        else {
          setLoading(false);
          toast('Password is Invalid', {
            position: 'top-center'
          });
        }
        // } else {

        //   throw new Error('Failed to login');
        // }
      }
    } catch (err) {
      // Handle error
      toast('Server is down', {
        position: 'top-center'
      });
      console.error(err);
    }
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
          <div className="card login-card mb-5" style={{ width: "18rem", background: "rgba(0, 0, 0, 0.05)" }}>
            <div className="card-body mb-5">
              <form className='mb-4' >
                <label className="label" aria-hidden="true">Login Page</label>
                <div className='text-center'>
                  <span className="material-symbols-outlined" style={{fontSize:"100px"}}>
                    passkey
                  </span>
                </div>
                <input required name="username" type="text" id="username"
                  value={formData.username} onChange={handleInputChange} className='form-control' placeholder='Email Id' />
                <input required name="password" type="password" id="password" value={formData.password}
                  onChange={handleInputChange} className='form-control' placeholder='Password' />
                <h6 className='forgot-password mb-5'>
                  <NavLink
                    // style={{ color: 'rgb(199, 98, 98)' }} 
                    className={({ isActive }) =>
                      `${isActive ? "link-color" : "nav-link"}`
                    } to={'/forgotPassword'}>Forgot Password</NavLink>
                </h6>
                <button className='button mt-5 form-control' onClick={handleFormSubmit}>Login</button>
                {/* <button type="reset" className='button mt-3 form-control'  >Sign Up</button> */}
                {/* <h6 className='forgot-password'><Link style={{ color: 'red' }} to={'/forgotPassword'}>Sign Up</Link></h6> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>



  );
};

export default Login;


// import React, { useState } from 'react'

// import { Link, NavLink, useNavigate } from 'react-router-dom'

// import '../css/Login.css'
// import axios from 'axios';
// import baseUrl from '../../helper/helper';


// function Login() {

//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };


//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const navigate = useNavigate();
//   const handleFormSubmit = async (event) => {

//     try{
//       const response  = await axios.post(`${baseUrl}/generate-token`, formData);

//       console.log("Response : "+response.data);
//       sessionStorage.setItem('user',response.data);
//       navigate('/home');

//     }
//     catch (error){
//       console.error('Login failed', error.response.data);
//     }


//   }


//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   }

//   return (
//     <>
//       <div className='container mt-5 mb-5'>
//         <div className='login'>
//           <div className="card" style={{ width: "18rem", background: "rgba(0, 0, 0, 0.05)" }}>
//             <div className="card-body">
//               <form className='' >
//                 <label className="label" aria-hidden="true">Login Page</label>
//                 <input required name="username" type="text" id="username"
//                   value={formData.username} onChange={handleInputChange} className='form-control' placeholder='Email Id' />
//                 <input required name="password" type="password" id="password" value={formData.password}
//                   onChange={handleInputChange} className='form-control' placeholder='Password' />
//                 <h6 className='forgot-password'>
//                   <NavLink
//                   // style={{ color: 'rgb(199, 98, 98)' }}
//                   className={({isActive})=>
//                   `${isActive ? "link-color": "nav-link"}`
//                 } to={'/forgotPassword'}>Forgot Password</NavLink>
//                 </h6>
//                 <button className='button mt-5 form-control' onClick={handleFormSubmit}>Login</button>
//                 {/* <button type="reset" className='button mt-3 form-control'  >Sign Up</button> */}
//                 {/* <h6 className='forgot-password'><Link style={{ color: 'red' }} to={'/forgotPassword'}>Sign Up</Link></h6> */}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Login