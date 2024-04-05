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

            const message = ['00:00', '12:00', '01:00'];
            const splitted = message.map(word => {
              return word.split('');
            });
            console.log(splitted);

            const keys = Object.keys(state);
            console.log(keys); // ['00:00']

            const values = Object.values(state);
            console.log(values); // ['go to gym']

            const isActive = hour === activeEvent;
            // console.log(Object.keys(hour));

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

                  {event ? <div></div> : null}
                </div>
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
