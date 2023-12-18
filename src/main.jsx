import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './app/components/js/Login.jsx'
import ForgotPassword from './app/components/js/ForgotPassword.jsx';
import Home from './app/components/js/pages/Home.jsx';
import B404 from './app/components/js/B404.jsx';



const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route
     path='/' element={<App/>}>
      <Route exact path="*" element={<B404 />}/>
      <Route path='' element={< Login />}/>
      
     
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      {/* <Route
     path='/admin' element={<App/>}>
      <Route path='' element={< Login />}/>
      
     
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      </Route> */}
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
