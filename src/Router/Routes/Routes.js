import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from '../../Layout/Main'
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import SignUp from "../../Pages/SignUp/SignUp";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Dashboard/DashBoard/ManageDoctors/ManageDoctors";

const router = createBrowserRouter([
    {

        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            }
        ]
    }
])

export default router