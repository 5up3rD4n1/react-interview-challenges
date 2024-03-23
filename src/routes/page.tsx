import {useState} from 'react';
import Calendar from '../components/Calendar';
import {EventTaskCreator} from '../components/EventTaskCreator';
export default function Page() {
  return (
    <>
      <main>
        <div>
          <a href="/">index</a>
        </div>
        <h1>Calendar</h1>
        <div className="split left">
          <div className="centered">
            <Calendar />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <EventTaskCreator />
          </div>
        </div>
      </main>
    </>
  );
}
