import Calendar from '../components/Calendar';
import {DateTime} from 'luxon';
import {CalendarPickerContext} from '../components/CalendarContext';
import EventContainer from '../components/Events/EventContainer';
import {useReducer, useState} from 'react';
import {reducer} from '../CalendarReducer/reducer';

export default function Page() {
  const getTime = () => {
    const dt = DateTime.now();
    const currentDateTime = dt.setLocale('es').setZone('America/Costa_Rica');
    const [month, setMonth] = useState<DateTime>(currentDateTime);
    return month.toLocaleString(DateTime.DATETIME_MED);
  };

  const [state, dispatch] = useReducer(reducer, {date: null});

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
              <Calendar />
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
