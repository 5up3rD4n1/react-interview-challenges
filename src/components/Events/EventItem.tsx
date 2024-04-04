import {DateTime} from 'luxon';
import {useReducer, useState} from 'react';
import {EventForm} from './EventForm';

interface EventItemData {
  [key: string]: string | null;
}

interface EventItemsProps {
  // data: EventItemData;
  // current: string;
  // onDeleteClick: (params: {hour: string}) => void;
  // onUpdateClick: (params: {hour: string; eventReminder: string}) => void;
}
interface ReducerState {
  [key: string]: string | null | undefined;
}

enum EventActionType {
  SAVE_EVENT = 'SAVE_EVENT',
  CLEAR_EVENT = 'CLEAR_EVENT',
  UPDATE_EVENT = 'UPDATE_EVENT',
}

interface Action<T> {
  type: EventActionType;
  payload: T;
}

function reducer(state: ReducerState, action: Action<any>): ReducerState {
  if (action.type === EventActionType.SAVE_EVENT) {
    return {...state, [action.payload.hour]: action.payload.eventReminder};
  }

  if (action.type === EventActionType.CLEAR_EVENT) {
    return {...state, [action.payload.hour]: null};
  }

  if (action.type === EventActionType.UPDATE_EVENT) {
    return {...state, [action.payload.hour]: action.payload.eventReminder};
  }

  return state;
}

function saveEvent(params: {hour: string; eventReminder: string}) {
  return {type: EventActionType.SAVE_EVENT, payload: params};
}

function clearEvent(params: {hour: string}) {
  return {type: EventActionType.CLEAR_EVENT, payload: params};
}

export function EventItem(props: EventItemsProps) {
  // const {data} = props;

  const [state, dispatch] = useReducer(reducer, {});

  function onDeleteClick(params: {hour: string}) {
    dispatch(clearEvent(params));
  }

  const halfHour = new Array(48).fill(null);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  function handleLiClick(hour: string) {
    setActiveEvent(hour);
  }

  function onFormSubmit(params: {hour: string; eventReminder: string}) {
    dispatch(saveEvent(params));
  }
  // function handlerOnClickAddNewEvent() {
  //   setEvents([...events, null]);
  // }

  const current = DateTime.now().startOf('day');

  // const timestamp = props.currentDateTime.toLocaleString(DateTime.DATE_FULL);
  const halfHoursTemplate = halfHour.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({minutes: 30}),
        acc: [...acc.acc, acc.current.toFormat('HH:mm')], // "hh:mm:ss" -> 12 hour format
      };
    },
    {
      current: DateTime.now().startOf('day'),
      acc: [],
    }
  );
  console.log({activeEvent, state});
  return (
    <div>
      <div className="">
        {}
        <h2 className="header">{current.toISO()}</h2>
        {/* <button onClick={handlerOnClickAddNewEvent}>add new event</button> */}

        <ul>
          {/* List of hours */}

          {halfHoursTemplate.acc.map((hour, index) => {
            const event = state[hour];

            const isActive = hour === activeEvent;

            return (
              <li key={index}>
                <div>
                  {isActive ? (
                    <>
                      <div>{hour}: </div>
                      <EventForm
                        onSubmit={(params: {eventReminder: string}) => {
                          onFormSubmit({
                            hour,
                            eventReminder: params.eventReminder,
                          });
                          setActiveEvent(null);
                        }}
                        onCloseClick={() => {
                          setActiveEvent(null);
                        }}
                        initialValue={event}
                      />
                    </>
                  ) : (
                    <div onClick={() => handleLiClick(hour)}>
                      {hour}: {event}
                    </div>
                  )}
                  {event ? (
                    <button
                      onClick={() => {
                        // props.onDeleteClick({hour: hourIndex});
                        onDeleteClick({hour});
                      }}
                    >
                      X
                    </button>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
