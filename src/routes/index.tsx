import {createBrowserRouter} from 'react-router-dom';
import Home from './home';
import Page from './page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calendar',
    element: <Page />,
  },
]);
