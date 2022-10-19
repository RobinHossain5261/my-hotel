import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Survices from "../components/Survices/Survices";
import Main from "../layout/Main";
import PrivetRoute from "./PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/survices',
                element: <PrivetRoute><Survices></Survices></PrivetRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/booking',
                element: <PrivetRoute><Booking></Booking></PrivetRoute>
            }

        ]
    }
])