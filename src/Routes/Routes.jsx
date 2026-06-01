import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import MyProfile from '../Pages/MyProfile';






const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,
            },
           {
                path: '/services',
                Component: Services,
            },
            {
                path: '/profile',
                Component: MyProfile,
            }



        ]
    },
]);


export default router;