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
import Blog from './Components/Blog/Blog.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import MainContent from './Components/MainContent/MainContent.jsx';
import MyToys from './Components/MyToys/MyToys.jsx';
import AllToys from './Components/AllToys/AllToys.jsx';
import AddAToy from './Components/AddAToy/AddAToy.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import ShopByCategory from './Components/ShopByCategory/ShopByCategory.jsx';
import ToysDetails from './Components/ToysDetails/ToysDetails.jsx';
import UpdateToyDetails from './Components/UpdateToyDetails/UpdateToyDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainContent></MainContent>,
        loader: () => fetch('http://localhost:1000/toys')


      },
      {
        path: "login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blogs",
        element: <Blog></Blog>
      },
      {
        path: "mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        loader: () => fetch('http://localhost:1000/toys')
      },
      {
        path: "addtoy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: "toys",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:1000/toys'),

      },
      {
        path: "toyDetail/:id",
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:1000/toyDetails/${params.id}`)


      },
      {
        path:'update/:id',
        element: <UpdateToyDetails></UpdateToyDetails>,
        loader: ({params}) => fetch(`http://localhost:1000/toys/${params.id}`)
      },
      {
        path:"shop",
        element: <ShopByCategory></ShopByCategory>,
        loader: () => fetch('http://localhost:1000/toys')

      }





    ]
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
