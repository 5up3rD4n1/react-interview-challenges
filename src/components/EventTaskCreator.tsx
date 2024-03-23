import {DateTime} from 'luxon';
import {useState} from 'react';
import {EventModal} from './EventModal';

export function EventTaskCreator() {
  const halfHours = new Array(48).fill(null);
  const now = DateTime.now().setLocale('es').setZone('America/Costa_Rica');
  const timestamp = now.toLocaleString(DateTime.DATE_FULL);
  const halfHoursTemplate = halfHours.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({minutes: 30}),
        acc: [...acc.acc, acc.current.toFormat('HH:mm:ss')], // "hh:mm:ss" -> 12 hour format
      };
    },
    {
      current: now.startOf('day'),
      acc: [],
    }
  );

  const [openModal, setOpenModal] = useState(false);

  function handleOnClickOpenModal() {
    setOpenModal(!openModal);
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
        {openModal && <EventModal />}
        {/* </div> */}
      </div>
    </div>
  );
}
