import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DefaultLayout } from '../layouts/defaultLayout';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
]);
