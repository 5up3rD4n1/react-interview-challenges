/* eslint-disable @typescript-eslint/no-explicit-any */
import {addCalendarEvent, deleteCalendarEvent} from '../reducer/actions';
import {useReducer, useState} from 'react';
import {reducer} from '../reducer/reducer';

export function EventModal() {
  const [state, dispatch] = useReducer(reducer, {
    dates: [],
  });

  const [date, setDate] = useState('');

  function handleOnClickAddEvent() {
    dispatch(addCalendarEvent(date));
    setDate('');
  }

  function handleEventDeleteClick(id: string) {
    dispatch(deleteCalendarEvent(id));
  }
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
          <label>Event Name</label>
          <input type="text" placeholder=""></input>

          <div>
            {state.dates.map((date: any) => {
              return (
                <div key={date.id}>
                  <div>
                    {date.date}
                    <label>Event Name</label>
                    <input type="text" placeholder=""></input>
                    <button onClick={() => handleEventDeleteClick(date.id)}>
                      X
                    </button>
                    <button onClick={handleOnClickAddEvent}>Add Event</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
