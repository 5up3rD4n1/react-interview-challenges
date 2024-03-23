import {DateTime} from 'luxon';

function toLocalString(date: DateTime): string {
  return date.toLocaleString(DateTime.DATETIME_FULL);
}

export function DateTimeExample() {
  // TimeZone
  // Immutability
  // Chaining ().method().method() => DateTime
  const now = DateTime.now().setLocale('es').setZone('America/Costa_Rica');
  const timestamp = now.toLocaleString(DateTime.DATETIME_FULL);

  const epoch = now.toMillis(); // 1/1/1970

  const aMonthAgo = now.minus({months: 1}); // now.add({ days: 1 });

  const aMonthAgoTimestamp = toLocalString(aMonthAgo);

  const halfHours = new Array(48).fill(null);

  const halfHoursTemplate = halfHours.reduce(
    (acc: {current: DateTime; acc: string[]}) => {
      return {
        current: acc.current.plus({minutes: 30}),
        acc: [...acc.acc, acc.current.toFormat('HH:mm:ss')], // "hh:mm:ss" -> 12 hour format
      };
    },
    {
      current: now.startOf('day'),
      acc: [],
    }
  );

  return (
    <>
      <div>
        <span>Current Date: {timestamp}</span>
      </div>
      <div>
        <span>Current Date Epoch: {epoch}</span>
      </div>

      <div>
        <span>Current Date A Month Ago: {aMonthAgoTimestamp}</span>
      </div>

      <div>
        <span>Current Date A Month Ago Day: {aMonthAgo.day}</span>
      </div>

      <div>
        <span>Current Date A Month Ago Month: {aMonthAgo.month}</span>
      </div>

      <div>
        <span>Current Date A Month Ago Year Week: {aMonthAgo.weekNumber}</span>
      </div>

      {halfHoursTemplate.acc.map(hour => {
        return (
          <div>
            <span>{hour}</span>
          </div>
        );
      })}
    </>
  );
}

export default DateTimeExample;
