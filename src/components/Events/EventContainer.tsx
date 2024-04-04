import {useReducer} from 'react';
import {reducer} from '../../reducer/reducer';
import {clearEvent, saveEvent} from '../../reducer/actions';
import {EventItem} from './EventItem';

export default function EventContainer() {
  const [state, dispatch] = useReducer(reducer, {});

  function onDeleteClick(params: {hour: string}) {
    dispatch(clearEvent(params));
  }

  function onFormSubmit(params: {hour: string; eventReminder: string}) {
    dispatch(saveEvent(params));
  }

  return (
    <>
      <main>
        {' '}
        <EventItem
          state={state}
          onDeleteClick={onDeleteClick}
          onFormSubmit={onFormSubmit}
          // onUpdateClick={onUpdateClick}
          // current={getTime()}
        />
      </main>
    </>
  );
}
