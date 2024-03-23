// import {useReducer} from 'react';
import {DateTime} from 'luxon';
import {useState} from 'react';
import {days, daysOfWeek} from './Data';
import {EventTaskCreator} from './EventTaskCreator';

// import {reducer} from '../reducer';
// import DateTimeExample from './DateTimeExample';
export default function Calendar() {
  const dt = DateTime.now();
  const currentDateTime = dt.setLocale('es').setZone('America/Costa_Rica');

  const [month, setMonth] = useState<DateTime>(currentDateTime);

  const current = month.toLocaleString(DateTime.DATETIME_MED);

  // const previousMonth = zone
  //   .minus({months: 1})
  //   .toLocaleString(DateTime.DATE_MED);
  // const nextMonth = zone.plus({months: 1}).toLocaleString(DateTime.DATE_MED);

  // const initialDay = dt.set(
  //   dt.set({month: 3}).plus({month: 1}).startOf('month').startOf('week')
  // );

  const months = new Array(12).fill(null);
  const addingMonths = months.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({months: 1}),
        acc: [...acc.acc, acc.current.toLocaleString(DateTime.DATETIME_MED)],
      };
    },
    {
      current: currentDateTime.startOf('day'),
      acc: [],
    }
  );

  const subtractMonths = months.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.minus({months: 1}),
        acc: [...acc.acc, acc.current.toLocaleString(DateTime.DATETIME_MED)],
      };
    },
    {
      current: currentDateTime.startOf('day'),
      acc: [],
    }
  );

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
    setMonth(month.minus({months: 1}).startOf('month'));
    // setMonth(previous);
  }
  function handleOnClickNext() {
    setMonth(month.plus({months: 1}).startOf('month'));

    // setMonth(next);
  }

  const handleOnClickShow = (date: string) => {
    // setOpenEvent((open: unknown) => !open);

    console.log(date);

    const dateTime = getDate(date);

    // console.log(dateTime.daysInMonth);
  };

  const monthDays = calcMonthDays(month);

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
            <h2 className="current-date">{current}</h2>
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
        {monthDays.map((week: any[], index) => {
          return (
            <ul key={index} className="days">
              {week.map((day, index) => {
                return (
                  <li key={index} onClick={() => handleOnClickShow(day.date)}>
                    {day.display}
                    <br></br>
                    <small>{day.date}</small>
                  </li>
                );
              })}
            </ul>
          );
        })}
        {/* {daysOfWeek.map(days => {
            return <li onClick={handleOnClickShow}>{days}</li>;
          })} */}
      </div>
    </>
  );
}

function calcMonthDays(datetime: DateTime) {
  let counter = 0;

  const weeks = new Array(6).fill(new Array(7).fill(null));

  let current = datetime.startOf('month');

  const daysInMonth = current.daysInMonth!;

  // month emty arrays with weeks
  return weeks.map((week, weekNumber) => {
    return week.map((_day: null, index: number) => {
      //weeks empty array
      const monthAcc = weekNumber * 7 + index;

      const weekDay = current.weekday;

      // if acc of months is lower than 7 (days) and bigger than index (day) number then returns empty
      if (monthAcc < 7 && weekDay > index) {
        return {
          display: '',
          date: null,
        };
      }

      // if count is bigger than days it returns empty space
      if (counter >= daysInMonth) {
        return {
          display: '',
          date: null,
        };
      }

      //current date adds one more day and keeps counting
      const cache = current; //current date
      current = current.plus({day: 1}); // adds one day
      counter++; // counter + 1

      return {
        display: cache.day, // returns the day
        date: cache.toFormat('yyyy-MM-dd HH:mm'),
      };
    });
  });
}

function getDate(date: string): DateTime {
  // 2024-04-01 10:30 => DateTime
  return DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm');
}
