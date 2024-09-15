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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ContactUS from './Components/ContactUS/ContactUS';

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
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({params})=> fetch(`https://car-doctor-server-swart-nine.vercel.app/services/${params.id}`)
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>
      },
      {
        path: "/contact",
        element: <ContactUS></ContactUS>
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
