import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserProvider } from './app/context/UserContext'
import NavBar from './app/components/js/NavBar'
import Footer from './app/components/js/Footer'
import baseUrl from './app/helper/helper'
import { LoginProvider } from './app/context/LoginContext'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import SideBar from './app/components/js/pages/SideBar'

function MobileApp() {

  const [users, setUser] = useState([])
  const addUser = (users) => {
    console.log("Added User: " + users)
    setUser((prev) => [
      // {id, ...product}
      users
      , ...prev])
  }

  const updateUser = (id, users) => {
    setUser((prev) => prev.map((prevUsers) => (prevUsers.id === id ? users : prevUsers)))


  }

  const deleteUser = (id) => {
    setUser((prev) => prev.filter((users) => users.id !== id))
  }

  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.innerWidth <= 600; // Change 600 to your desired breakpoint
            setIsMobile(isMobileDevice);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial screen size
        return () => window.removeEventListener('resize', handleResize);
    }, []);


  //  Login form handle Golobly 

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isLogin = () => {
    return sessionStorage.getItem('isLogin');
  }

  const setIsLogin = (temp) => {
    sessionStorage.setItem('isLogin', temp);
  }

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/')
  }



  return (
    <>
      <LoginProvider value={{ isLogin, setIsLogin, logout }}>
        <UserProvider value={{ users, addUser, updateUser, deleteUser }}>
          <ToastContainer />
          <div>
            <div className="container-fluid text-center">
              <div className="row">
                <NavBar />
                <div className="col-1">
                  <ul className="list-group list-group-flush">

                    {(sessionStorage.getItem('isLogin'))
                      ? (<>
                        <SideBar />
                      </>)
                      : (<></>)
                    }

                  </ul>
                </div>
                <div className="col-10">
                  <div className="routerCSS">
                    <Outlet />                 
                  </div>
                </div>
                <div className="col-1">
                </div>
                <Footer className='' />
              </div>
            </div>
          </div>
        </UserProvider>
      </LoginProvider >
    </>
  )
}

export default MobileApp
