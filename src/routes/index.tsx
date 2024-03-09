import {createBrowserRouter} from 'react-router-dom';
import Home from './home';
import Calendar from './calendar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
]);
