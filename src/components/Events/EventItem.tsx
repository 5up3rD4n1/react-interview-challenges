import {DateTime} from 'luxon';
import {useState} from 'react';
import {EventForm} from './EventForm';
import {ReducerState} from '../../reducer/reducer';

interface EventItemsProps {
  state: ReducerState;
  onDeleteClick: (params: {hour: string}) => void;
  onFormSubmit: (params: {hour: string; eventReminder: string}) => void;
}
export function EventItem(props: EventItemsProps) {
  const {state} = props;

  const halfHour = new Array(48).fill(null);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  function handleItemClick(hour: string) {
    setActiveEvent(hour);
  }

  const current = DateTime.now().startOf('day');

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

        <ul>
          {/* List of hours */}

          {halfHoursTemplate.acc.map((hour, index) => {
            const event = state[hour];

            const isActive = hour === activeEvent;

            return (
              <li className="" key={index}>
                <div>
                  {isActive ? (
                    <>
                      <div>{hour}: </div>
                      <EventForm
                        onSubmit={(params: {eventReminder: string}) => {
                          props.onFormSubmit({
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
                    <div onClick={() => handleItemClick(hour)}>
                      {hour}: {event}
                    </div>
                  )}
                  {event ? (
                    <button
                      onClick={() => {
                        props.onDeleteClick({hour});
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
