import {actionType} from './action-type';

export function addCalendarEvent(name: any) {
  return {
    type: actionType.ADD_CALENDAR_EVENT,
    payload: {id: '01', name},
  };
}

export function deleteCalendarEvent(id: any) {
  return {
    type: actionType.DELETE_CALENDAR_EVENT,
    payload: {id},
  };
}

export function editCalendarEvent(id: any, events: any) {
  return {
    type: actionType.EDIT_CALENDAR_EVENT,
    payload: {id, ...events},
  };
}
