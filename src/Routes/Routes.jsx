import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';






const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',

                
                element: <div>Hello World boissF</div>
            },
           



        ]
    },
]);


export default router;