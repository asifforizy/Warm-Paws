import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import MyProfile from '../Pages/MyProfile';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';






const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,
                loader: ()=> fetch('/data.json')
            },
           {
                path: '/services',
                Component: Services,
            },
            {
                path: '/profile',
                Component: MyProfile,
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