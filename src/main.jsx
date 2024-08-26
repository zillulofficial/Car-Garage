import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AuthProvider from './providers/AuthProvider';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import CheckOut from './CheckOut/CheckOut';
import Booking from './Components/Booking/Booking';
import AboutSection from './Components/AboutSection/AboutSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/bookings",
        element: <Booking></Booking>
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>
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
