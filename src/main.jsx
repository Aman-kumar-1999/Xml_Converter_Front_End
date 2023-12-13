import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './app/components/js/Login.jsx'
import ForgotPassword from './app/components/js/ForgotPassword.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
     path='/' element={<App/>}>
      <Route path='' element={< Login />}/>
      
     
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      {/* <Route
        loader={GithubInfoLoader}
        path='/products/:productsName'
        element={<ProductDetail />}
      /> */}
     
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
