import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './app/context/UserContext'
import NavBar from './app/components/js/NavBar'
import Footer from './app/components/js/Footer'
import baseUrl from './app/helper/helper'

function App() {

  const [users, setUser] = useState([])
  // const [isLogin,setLogin] = useState()
  // const id = nanoid(10);
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



  React.useEffect(() => {
    return () => fetch(`${baseUrl}/products`)
      .then((response) => response.json())
      .then((users) => {
        // console.log(products);
        setUser(users)
      })
      .catch((error) => {
        console.log("Kindly start the server");
        alert("Kindly start the server");
      });

  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])




  return (
    <>
      <UserProvider value={{ users, addUser, updateUser, deleteUser }}>

        <NavBar />
        <Outlet />
        <Footer />

      </UserProvider>
    </>
  )
}

export default App
