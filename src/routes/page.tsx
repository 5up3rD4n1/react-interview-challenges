import {useState} from 'react';
import Calendar from '../components/Calendar';
import {EventTaskCreator} from '../components/EventTaskCreator';
import {DateTime} from 'luxon';
import {DateContext} from '../components/DateContext';

export default function Page() {
  const currentDateTime = DateTime.now()
    .setLocale('es')
    .setZone('America/Costa_Rica');

  const [month, setMonth] = useState<DateTime>(currentDateTime);

  return (
    <>
      <main>
        <div>
          <a href="/">index</a>
        </div>
        <h1>Calendar</h1>
        {/* <DateContext.Provider value={{month, setMonth}}> */}
        <div className="split left">
          <div className="centered">
            <Calendar />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <EventTaskCreator
              isActive={true}
              currentDateTime={currentDateTime}
            />
          </div>
        </div>
        {/* </DateContext.Provider> */}
      </main>
    </>
  );
}
