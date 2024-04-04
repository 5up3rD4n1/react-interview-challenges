import Calendar from '../components/Calendar';
import {EventTaskCreator} from '../components/EventTaskCreator';
import {DateTime} from 'luxon';
import {DateContext} from '../components/DateContext';
import {EventItem} from '../components/Events/EventItem';
import {EventForm} from '../components/Events/EventForm';
import {useReducer, useState} from 'react';

export default function Page() {
  const getTime = () => {
    const dt = DateTime.now();
    const currentDateTime = dt.setLocale('es').setZone('America/Costa_Rica');
    const [month, setMonth] = useState<DateTime>(currentDateTime);
    return month.toLocaleString(DateTime.DATETIME_MED);
  };

  // function hideShow() {
  //   return (
  //     <div>
  //       <EventForm onSubmit={onFormSubmit} />
  //     </div>
  //   );
  // }

  // const {month, setMonth} = useContext(DateContext);

  // function handleOnClickShowHideEvent() {
  //   setShowCreateEvent(!showCreateEvent);
  // }

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
            {/* <div className="dates-container">
              <EventForm onSubmit={onFormSubmit} />
            </div> */}
            {/* <EventTaskCreator
                isActive={true}
                currentDateTime={currentDateTime}
              /> */}

            <EventItem
            // data={state}
            // onDeleteClick={onDeleteClick}
            // onUpdateClick={onUpdateClick}
            // current={getTime()}
            />
          </div>
        </div>
        {/* </DateContext.Provider> */}
      </main>
    </>
  );
}
