import {DateTime} from 'luxon';
import {useEffect, useReducer, useState} from 'react';
import {
  addCalendarEvent,
  deleteCalendarEvent,
  editCalendarEvent,
} from '../reducer/actions';
import {reducer} from '../reducer/reducer';
import {allEvents} from './Data';

export function EventTaskCreator(props: any) {
  const halfHours = new Array(48).fill(null);
  const dt = DateTime.now();
  const currentDateTime = dt.setLocale('es').setZone('America/Costa_Rica');
  const timestamp = props.currentDateTime.toLocaleString(DateTime.DATE_FULL);
  const halfHoursTemplate = halfHours.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({minutes: 30}),
        acc: [...acc.acc, acc.current.toFormat('HH:mm:ss')], // "hh:mm:ss" -> 12 hour format
      };
    },
    {
      current: props.currentDateTime.startOf('day'),
      acc: [],
    }
  );
  const [data, setData] = useState([]);
  const [showCreateEvent, setshowCreateEvent] = useState(false);
  const [eventName, setEventName] = useState('');
  const [selected, setSelected] = useState(true);
  const [values, setValues] = useState({name: props.name});
  const [state, dispatch] = useReducer(reducer, {
    events: [],
  });

  function handleOnClickShowHideEvent() {
    setshowCreateEvent(!showCreateEvent);
    setEventName('');
  }

  function handleEventOnChangeName(input: any) {
    setEventName(input.target.value);
  }

  function handleAddEvent() {
    dispatch(addCalendarEvent(eventName));
    setEventName('');
    setSelected(selected);
  }

  function handleOnClickEdit(id: any, event: any) {
    dispatch(editCalendarEvent(id, event));
    setValues(values);
  }
  function handleOnClickDelete(id: any) {
    dispatch(deleteCalendarEvent(id));
  }

  return (
    <div>
      {' '}
      <div className="calendar-dates">
        <div>
          {' '}
          {/* <h1>This is EventTaskCreator</h1> */}
          {/* <h2 className="header">{timestamp}</h2> */}
        </div>

        {/* <div className={props.isShown ? 'display-block' : 'hide'}> */}
        {/* <div style={{display: isShown ? 'block' : 'none'}}></div> */}
        {/* <div className="hide"> */}
        <ul className="dates">
          {/* List of hours */}

          <li>
            {halfHoursTemplate.acc.map((hour: any, index: any) => {
              return (
                <div>
                  <li key={index} onClick={handleOnClickShowHideEvent}>
                    {hour}
                    {/* {
                      <div
                        style={{display: selected ? 'display-block' : 'hide'}}
                      ></div>
                    } */}
                  </li>
                </div>
              );
            })}
          </li>
        </ul>

        {/* Create Event input */}

        {props.isActive
          ? showCreateEvent && (
              <div>
                <div className="create">
                  <input
                    type="text"
                    placeholder="añade un nombre"
                    value={eventName}
                    onChange={handleEventOnChangeName}
                  ></input>
                  {eventName}
                </div>
                <div className="event-buttons">
                  <button onClick={handleAddEvent}>add</button>
                  <button onClick={handleOnClickShowHideEvent}>cancel</button>
                </div>
              </div>
            )
          : !props.isActive}

        <ul>
          {/* Created Event */}

          {state.events.map((event: any) => {
            return (
              <li key={event.id}>
                <div>
                  <div>{props.currentTime}</div>
                  <div className="create">{event.name}</div>

                  <div className="event-buttons">
                    <button
                      onClick={() => handleOnClickEdit(event.id, event.name)}
                    >
                      edit
                    </button>
                    <button onClick={() => handleOnClickDelete(event.id)}>
                      delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
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

function eventByHour(events: any) {
  return events.reduce((acc: any, event: any) => {
    const key = `${event.time}`;

    return {
      ...acc,

      [key]: acc[key] ? [...acc[key], event] : [event],
    };
  }, {});
}

console.log(eventByHour(allEvents));
