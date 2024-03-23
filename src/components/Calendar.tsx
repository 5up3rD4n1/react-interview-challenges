// import {useReducer} from 'react';
import {DateTime} from 'luxon';
import {useState} from 'react';
import {days, daysOfWeek} from './Data';
import {EventTaskCreator} from './EventTaskCreator';

// import {reducer} from '../reducer';
// import DateTimeExample from './DateTimeExample';
export default function Calendar() {
  const dt = DateTime.now();
  const zone = dt.setLocale('es').setZone('America/Costa_Rica');
  const current = zone.toLocaleString(DateTime.DATE_MED);

  const previousMonth = zone
    .minus({months: 1})
    .toLocaleString(DateTime.DATE_MED);
  const nextMonth = zone.plus({months: 1}).toLocaleString(DateTime.DATE_MED);

  // const initialDay = dt.set(
  //   dt.set({month: 3}).plus({month: 1}).startOf('month').startOf('week')
  // );

  const months = new Array(12).fill(null);
  const addingMonths = months.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({months: 1}),
        acc: [...acc.acc, acc.current.toLocaleString(DateTime.DATE_MED)],
      };
    },
    {
      current: zone.startOf('day'),
      acc: [],
    }
  );

  const subtractMonths = months.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.minus({months: 1}),
        acc: [...acc.acc, acc.current.toLocaleString(DateTime.DATE_MED)],
      };
    },
    {
      current: zone.startOf('day'),
      acc: [],
    }
  );

  const [month, setMonth] = useState(current);

  // const startDate = {month: 3, week: 0};
  // const endDate = {month: 3, day: 31};
  const [openEvent, setOpenEvent] = useState(false);
  const next = addingMonths.acc.map(month => {
    return (
      <div>
        <h2 className="">{month}</h2>
      </div>
    );
  });

  const previous = subtractMonths.acc.map(month => {
    return (
      <div>
        <h2 className="">{month}</h2>
      </div>
    );
  });

  function handlerOnClickPrevious() {
    setMonth(previousMonth);
    // setMonth(previous);
  }
  function handleOnClickNext() {
    setMonth(nextMonth);
    // setMonth(next);
  }

  const handleOnClickShow = () => {
    setOpenEvent((open: unknown) => !open);
  };

  return (
    <>
      <div className="wrapper"></div>
      <h1>This is calendar component</h1>
      <div className="header">
        <button className="icons" onClick={handlerOnClickPrevious}>
          -
        </button>

        {current && (
          <div>
            <h2 className="current-date">{month}</h2>
          </div>
        )}

        {/* <h2 className="current-date">{current}</h2> */}
        <button className="icons" onClick={handleOnClickNext}>
          +
        </button>
      </div>
      {openEvent && <EventTaskCreator />}

      <div className="calendar">
        <ul className="weeks">
          <li>{days[0]}</li>
          <li>{days[1]}</li>
          <li>{days[2]}</li>
          <li>{days[3]}</li>
          <li>{days[4]}</li>
          <li>{days[5]}</li>
          <li>{days[6]}</li>
        </ul>
        <ul className="days">
          {daysOfWeek.map(days => {
            return <li onClick={handleOnClickShow}>{days}</li>;
          })}
        </ul>
        {previous}
        {next}
      </div>
    </>
  );
}
