import {useReducer} from 'react';
import {reducer} from '../../CalendarReducer/reducer';
import {clearEvent, saveEvent} from '../../CalendarReducer/actions';
import {EventItem} from './EventItem';

export default function EventContainer() {
  // const [state, dispatch] = useReducer(reducer, {});

  // function onDeleteClick(params: {eventId: string}) {
  //   dispatch(clearEvent(params));
  // }

  // function onFormSubmit(params: {eventId: string; eventReminder: string}) {
  //   dispatch(saveEvent(params));
  // }

  return (
    <>
      <main>
        {' '}
        <EventItem
        // stateReducer={state}
        // onDeleteClick={onDeleteClick}
        // onFormSubmit={onFormSubmit}
        // onUpdateClick={onUpdateClick}
        // current={getTime()}
        />
      </main>
    </>
  );
}
