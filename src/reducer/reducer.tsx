import {actionType} from './action-type';

function addCalendarEvent(state: any, action: any) {
  return {
    ...state,
    dates: [...state.dates, action.payload],
  };
}

function deleteCalendarEvent(state: any, action: any) {
  const dates = state.dates.filter((date: {id: any}) => {
    return date.id !== action.payload.id;
  });
  return {
    ...state,
    dates,
  };
}

export function reducer(state: any, action: any) {
  // const handler = handlerMapper[action.type];
  // return handler ? handler(state, action) : state;

  switch (action.type) {
    case actionType.ADD_CALENDAR_EVENT:
      return addCalendarEvent(state, action);

    case actionType.DELETE_CALENDAR_EVENT:
      return deleteCalendarEvent(state, action);
    default:
      return state;
  }
}
