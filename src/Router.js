import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoutes from './routes/ProtectedRoutes';
import Main from './Main';
import Dashboard from './pages/Dashboard';
import VideosList from './pages/VideosList';
import PageNotFound from './pages/PageNotFound';


// Create the router configuration
const router = createBrowserRouter(
  [
    {
      path: '/auth/login',
      element: <Login />,
      index: true
    },
    {
      element: <PrivateRoutes  />,
      children: [
        {
          path: '/',
          element: <Main />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/video-list',
          element: <VideosList />
        },
      ]
    },
    {
      path: '*',
      element:<PageNotFound />
    }
  ]
);

export default router;