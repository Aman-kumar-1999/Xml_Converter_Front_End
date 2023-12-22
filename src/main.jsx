import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './app/components/js/Login.jsx'
import ForgotPassword from './app/components/js/ForgotPassword.jsx';
import Home from './app/components/js/pages/Home.jsx';
import B404 from './app/components/js/B404.jsx';
import Profile from './app/components/js/pages/Profile.jsx'
import Dashboard from './app/components/js/pages/Dashboard.jsx';
import CBEXII from './app/components/js/pages/CBEXII.jsx';
import DemoXsd from './app/components/js/pages/DemoXsd.jsx';
import CBEXIII from './app/components/js/pages/CBEXIII.jsx';
import CBEXIV from './app/components/js/pages/CBEXIV.jsx';



const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route
     path='/' element={<App/>}>
      <Route exact path="*" element={<B404 />}/>
      <Route path='' element={< Home />}/>
      
     
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/cbexii' element={<CBEXII/>}/>
      <Route path='/cbexiii' element={<CBEXIII/>}/>
      {/* <Route path='/cbexiv' element={<CBEXIV/>}/> */}
      <Route path='/demo' element={<DemoXsd/>}/>
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
