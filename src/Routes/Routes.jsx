import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import MyProfile from '../Pages/MyProfile';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import PrivateRoutes from '../Provider/PrivateRoutes';
import ServiceDetails from '../Pages/ServiceDetails';
import About from '../Pages/About';






const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('/data.json')
            },
            {
                path: '/services',
                loader: () => fetch('/data.json'),
                element:
                    <PrivateRoutes>
                        <Services></Services>
                    </PrivateRoutes>

            },

            {
                path: '/services/:id',
                loader: () => fetch('/data.json'),
                element:<ServiceDetails></ServiceDetails>
            

            },
            {
                path: '/about',
                Component: About,
            },

            {
                path: '/profile',
                element:
                    (<PrivateRoutes>
                        <MyProfile></MyProfile>
                    </PrivateRoutes>)
            },

            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/signup',
                Component: SignUp,
            }
        ]
    },
]);


export default router;