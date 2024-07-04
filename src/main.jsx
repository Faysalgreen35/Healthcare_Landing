 
import React from 'react'
import ReactDOM from 'react-dom/client'  
import {
  createBrowserRouter,
   
  RouterProvider,
} from "react-router-dom"; 

import './index.css'
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
     
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)