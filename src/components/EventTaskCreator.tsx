import {DateTime} from 'luxon';
import {useState} from 'react';
import {EventModal} from './EventModal';

export function EventTaskCreator() {
  const halfHours = new Array(48).fill(null);
  const dt = DateTime.now();
  const currentDateTime = dt.setLocale('es').setZone('America/Costa_Rica');
  const timestamp = currentDateTime.toLocaleString(DateTime.DATE_FULL);
  const halfHoursTemplate = halfHours.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({minutes: 30}),
        acc: [...acc.acc, acc.current.toFormat('HH:mm:ss')], // "hh:mm:ss" -> 12 hour format
      };
    },
    {
      current: currentDateTime.startOf('day'),
      acc: [],
    }
  );

  const [date, setDate] = useState<DateTime>(currentDateTime);
  const [openModal, setOpenModal] = useState(false);

  function handleOnClickOpenModal() {
    setDate(date);
  }

  return (
    <div>
      {' '}
      <div className="calendar-dates">
        <div>
          {' '}
          <h1>This is EventTaskCreator</h1>
          <h2 className="header">{timestamp}</h2>
        </div>
        {/* <div className={props.isShown ? 'display-block' : 'hide'}> */}
        {/* <div style={{display: isShown ? 'block' : 'none'}}></div> */}
        {/* <div className="hide"> */}
        <ul className="dates">
          <li>
            {halfHoursTemplate.acc.map(hour => {
              return (
                <div>
                  <li onClick={handleOnClickOpenModal} className="half-hour">
                    {hour}
                  </li>
                </div>
              );
            })}
          </li>
        </ul>
        {date && <EventModal />}
        {/* </div> */}
      </div>
    </div>
  );
}

function getDate(date: string): DateTime {
  // 2024-04-01 10:30 => DateTime
  return DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm');
}

// homework finish EventTaskCreator
// use useReducer
// use useContext
// use props
// use any react hooks to manage state

// Onclick hour =>

// opens input create event
// button save event and cancel
// button delete event

// new event should appear next to hours
// fix CSS
