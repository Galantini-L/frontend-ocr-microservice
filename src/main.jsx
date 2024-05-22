import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { RegisterForm } from './components/sigup'
import { LoginFrom } from './components/login'
import { NotFound } from './components/notFound'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <LoginFrom />
  },
  {
    path: '/signup',
    element: <RegisterForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
