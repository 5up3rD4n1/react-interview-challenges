import {DateTime} from 'luxon';
import {useContext, useState} from 'react';
import {EventForm} from './EventForm';

import {CalendarPickerContext} from '../CalendarContext';
import {useVisibilityStatus} from '../../routes/page';
import {clearEvent, saveEvent} from '../../CalendarReducer/actions';

// interface EventItemsProps {
//   stateReducer: ReducerState;
//   onDeleteClick: (params: {hour: string}) => void;
//   onFormSubmit: (params: {eventReminder: string; eventId: string}) => void;
// }

export function EventItem() {
  const {state, dispatch} = useContext(CalendarPickerContext);

  const halfHour = new Array(48).fill(null);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  function handleItemClick(hour: string) {
    setActiveEvent(hour);
  }

  const current = state.date.toString();

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

  function handleOnFormSubmit(params: {
    eventReminder: string;
    eventId: string;
  }) {
    dispatch(saveEvent(params));
  }

  function handleDeleteClick(params: {eventId: string}) {
    dispatch(clearEvent(params));
  }

  console.log({state});

  return (
    <div>
      <div className="">
        {}
        <h2 className="header">{current}</h2>

        <ul>
          {/* List of hours */}

          {halfHoursTemplate.acc.map((hour, index) => {
            // const event = stateReducer[hour]; // 02:30
            const selectedDate = state.date.toFormat('yyyy-MM-dd');
            const eventId = `${selectedDate} ${hour}`;

            const event = state.events[eventId];
            // console.log(event);

            // const message = ['00:00', '12:00', '01:00'];
            // const splitted = message.map(word => {
            //   return word.split('');
            // });
            // console.log(splitted);

            // const keys = Object.keys(stateReducer);
            // console.log(keys); // ['00:00']

            // const values = Object.values(stateReducer);
            // console.log(values); // ['go to gym']

            const isActive = hour === activeEvent;
            // console.log(Object.keys(hour));

            // const eventConfirmation = keys.length > 0 ? 'event' : 'no events';

            return (
              <li className="" key={index}>
                <div>
                  {isActive ? (
                    <>
                      <div>{hour}:</div>
                      <EventForm
                        onSubmit={(params: {eventReminder: string}) => {
                          handleOnFormSubmit({
                            eventReminder: params.eventReminder,
                            eventId,
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
                    <div onClick={() => handleItemClick(hour)}>
                      {hour}: {event}
                    </div>
                  )}

                  {event ? (
                    <button
                      onClick={() => {
                        handleDeleteClick({eventId});
                      }}
                    >
                      X
                    </button>
                  ) : null}
                </div>
                {/** If my array has an event (more than 0) then 'event if there is no events created then 'no events */}
                {/* {eventConfirmation} */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
const hour = [
  '2020 01 12T19:00:00',
  '2019 12 30T19:00:00',
  '2019 12 27T19:00:00',
  '2019 12 25T19:00:00',
  '2019 12 06T11:00:00',
  '2019 12 02T19:00:00',
  '2019 12 02T07:00:00',
  '2020 01 25T17:00:00',
  '2020 01 13T23:00:00',
  '2019 10 28T17:00:00',
  '2019 05 27T18:00:00',
  '2019 02 28T17:00:00',
  '2019 02 27T18:00:00',
  '2019 01 28T17:00:00',
];
