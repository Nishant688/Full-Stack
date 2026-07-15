import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FacialExpression from './Components/FacialExpression'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Admin from './Components/Admin'
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
  let routes = createBrowserRouter([
  {
    path: "/",
    element: <FacialExpression />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
  path: "/wp-admin",
  element: (
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  )
}
]);
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
