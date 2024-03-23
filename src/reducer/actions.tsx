import {actionType} from './action-type';

export function addCalendarEvent(date: string) {
  return {
    type: actionType.ADD_CALENDAR_EVENT,
    payload: {id: '01', date},
  };
}

export function deleteCalendarEvent(id: string) {
  return {
    type: actionType.DELETE_CALENDAR_EVENT,
    payload: {id},
  };
}
