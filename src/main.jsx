import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './Components/Home/Home.jsx';
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import Register from './Components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/register",
    element: <Register></Register>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
