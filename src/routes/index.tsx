import {createBrowserRouter} from 'react-router-dom';
import Home from './home';
import Page from './page';
import Counter from '../components/Counter';
import SlotsMachine from '../components/SlotsMachine';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calendar',
    element: <Page />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/slots-machine',
    element: <SlotsMachine />,
  },
]);
