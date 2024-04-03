import Calendar from '../components/Calendar';
import {EventTaskCreator} from '../components/EventTaskCreator';
import {DateTime} from 'luxon';
import {DateContext} from '../components/DateContext';
import {EventItem} from '../components/Events/EventItem';
import {EventForm} from '../components/Events/EventForm';
import {useReducer, useState} from 'react';

interface ReducerState {
  [key: string]: string | null;
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

function updateEvent(params: {hour: string; eventReminder: string}) {
  return {type: EventActionType.UPDATE_EVENT, payload: params};
}

export default function Page() {
  const getTime = () => {
    const dt = DateTime.now();
    const currentDateTime = dt.setLocale('es').setZone('America/Costa_Rica');
    const [month, setMonth] = useState<DateTime>(currentDateTime);
    return month.toLocaleString(DateTime.DATETIME_MED);
  };

  function hideShow() {
    return (
      <div>
        <EventForm onSubmit={onFormSubmit} />
      </div>
    );
  }

  // const {month, setMonth} = useContext(DateContext);

  const [state, dispatch] = useReducer(reducer, {});

  function onFormSubmit(params: {hour: string; eventReminder: string}) {
    dispatch(saveEvent(params));
  }

  const [showCreateEvent, setShowCreateEvent] = useState(false);

  function onDeleteClick(params: {hour: string}) {
    dispatch(clearEvent(params));
  }

  function onUpdateClick(params: {hour: string; eventReminder: string}) {
    dispatch(updateEvent(params));
  }

  console.log(state);
  function handleOnClickShowHideEvent() {
    setShowCreateEvent(!showCreateEvent);
  }

  return (
    <>
      <main>
        <div>
          <a href="/">index</a>
        </div>
        <h1>Calendar</h1>
        {/* <DateContext.Provider value={currentDateTime}> */}
        <div className="split left">
          <div className="centered">
            <Calendar />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="dates-container">
              <EventForm onSubmit={onFormSubmit} />
            </div>
            {/* <EventTaskCreator
                isActive={true}
                currentDateTime={currentDateTime}
              /> */}

            <EventItem
              data={state}
              onDeleteClick={onDeleteClick}
              onUpdateClick={onUpdateClick}
              onHideShow={hideShow}
              current={getTime()}
            />
          </div>
        </div>
        {/* </DateContext.Provider> */}
      </main>
    </>
  );
}
