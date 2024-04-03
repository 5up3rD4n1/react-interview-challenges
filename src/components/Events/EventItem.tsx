import {DateTime} from 'luxon';
import {useState} from 'react';
import {EventForm} from './EventForm';

interface EventItemData {
  [key: string]: string | null;
}

interface EventItemsProps {
  data: EventItemData;
  current: string;
  onDeleteClick: (params: {hour: string}) => void;
  onUpdateClick: (params: {hour: string; eventReminder: string}) => void;
  onHideShow: () => void;
}

export function EventItem(props: EventItemsProps) {
  const {data} = props;

  const halfHour = new Array(48).fill(null);

  // function handlerOnClickAddNewEvent() {
  //   setEvents([...events, null]);
  // }

  // const timestamp = props.currentDateTime.toLocaleString(DateTime.DATE_FULL);
  const halfHoursTemplate = halfHour.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({minutes: 30}),
        acc: [...acc.acc, acc.current.toFormat('HH:mm')], // "hh:mm:ss" -> 12 hour format
      };
    },
    {
      current: DateTime.now(),
      acc: [],
    }
  );

  return (
    <div>
      <div className="calendar-dates">
        {}
        <h2 className="header">{props.current}</h2>
        {/* <button onClick={handlerOnClickAddNewEvent}>add new event</button> */}

        <ul className="dates">
          {/* List of hours */}

          <li onClick={props.onHideShow}>
            {halfHoursTemplate.acc.map((hour, index) => {
              const hourIndex = `${index + 1}`;
              const event = data[hourIndex];
              return (
                <div>
                  {}
                  <li key={index}>
                    {/* {isActive ? (
                        <EventForm
                          onSubmit={() => {
                          }}
                        />
                      ) : null} */}
                    {hour}: {event}
                    {event ? (
                      <div>
                        <button
                          onClick={() => {
                            props.onDeleteClick({hour: hourIndex});
                          }}
                        >
                          X
                        </button>
                        <button
                          onClick={() => {
                            alert(`Index ${index} updated`);
                          }}
                        >
                          ^
                        </button>
                      </div>
                    ) : null}
                  </li>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}
