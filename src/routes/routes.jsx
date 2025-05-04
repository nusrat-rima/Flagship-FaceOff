import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Favourites from '../pages/Favourites';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import PhoneDetails from '../pages/PhoneDetails';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favourites',
        Component: Favourites,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/phone-details',
        Component: PhoneDetails,
      },
    ],
  },
]);
export default router;
