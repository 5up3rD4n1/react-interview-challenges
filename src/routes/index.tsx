import {createBrowserRouter} from 'react-router-dom';
import Home from './home';
import Page from './page';
import Counter from '../components/Others/Counter';
import SlotsMachine from '../components/Others/SlotsMachine';
import RangePickerContainer from '../components/RangePicker/RangePickerContainer';
import TodoTickets from '../components/TodoTickets/TodoTickets';

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
  {
    path: '/range-picker',
    element: <RangePickerContainer />,
  },
  {
    path: '/todo-tickets',
    element: <TodoTickets />,
  },
]);
