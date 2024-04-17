import Calendar from '../components/Calendar';
import {DateTime} from 'luxon';
import {CalendarPickerContext} from '../components/CalendarContext';
import EventContainer from '../components/Events/EventContainer';
import {useContext, useReducer, useState} from 'react';
import {reducer} from '../CalendarReducer/reducer';
import {isVisible} from '@testing-library/user-event/dist/utils';

export const useVisibilityStatus = () => useContext(CalendarPickerContext);
export default function Page() {
  // const getTime = () => {
  //   const dt = DateTime.now();
  //   const currentDateTime = dt.setLocale('es').setZone('America/Costa_Rica');
  //   const [month, setMonth] = useState<DateTime>(currentDateTime);
  //   return month.toLocaleString(DateTime.DATETIME_MED);
  // };

  const [isVisible, setIsVisible] = useState(true);

  const onClickIsVisible = () => setIsVisible(isVisible => !isVisible);

  const [state, dispatch] = useReducer(reducer, {
    date: DateTime.now(),
    id: null,
    isVisible: false,
    events: {
      '2024-04-16 02:30': 'Rinse the dishes', // yyyy-MM-dd HH:mm
    },
    onClickIsVisible: () => {},
  });

  return (
    <>
      <main>
        <div>
          <a href="/">index</a>
        </div>
        <h1>Calendar</h1>
        <CalendarPickerContext.Provider value={{state, dispatch}}>
          <div className="split left">
            <div className="centered">
              <Calendar value={(state.date, state.isVisible)} />
            </div>
          </div>
          <div className="split right">
            <div>
              <EventContainer />
            </div>
          </div>
        </CalendarPickerContext.Provider>
      </main>
    </>
  );
}
