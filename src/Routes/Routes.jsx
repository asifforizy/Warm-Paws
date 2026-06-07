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
import Edit from '../Pages/Edit';
import Loading from '../Pages/Loading';






const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('/data.json'),
                hydrateFallbackElement : <Loading></Loading>
            },
            {
                path: '/services',
                loader: () => fetch('/data.json'),
                hydrateFallbackElement : <Loading></Loading>,
                element:
                    <PrivateRoutes>
                        <Services></Services>
                    </PrivateRoutes>

            },

            {
                path: '/services/:id',
                loader: () => fetch('/data.json'),
                hydrateFallbackElement : <Loading></Loading>,
                element: <ServiceDetails></ServiceDetails>


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
                hydrateFallbackElement : <Loading></Loading>
            },
            {
                path: '/signup',
                Component: SignUp,
                hydrateFallbackElement : <Loading></Loading>
            },

            {
                path: '/editProfile',
                Component: Edit,
                hydrateFallbackElement : <Loading></Loading>
            }

        ]
    },
]);


export default router;