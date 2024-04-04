import {EventActionType} from './action-type';

export interface Action<T> {
  type: EventActionType;
  payload: T;
}

export function saveEvent(params: {hour: string; eventReminder: string}) {
  return {type: EventActionType.SAVE_EVENT, payload: params};
}

export function clearEvent(params: {hour: string}) {
  return {type: EventActionType.CLEAR_EVENT, payload: params};
}

// export function addCalendarEvent(name: any) {
//   return {
//     type: actionType.ADD_CALENDAR_EVENT,
//     payload: {id: '01', name},
//   };
// }

// export function deleteCalendarEvent(id: any) {
//   return {
//     type: actionType.DELETE_CALENDAR_EVENT,
//     payload: {id},
//   };
// }

// export function editCalendarEvent(id: any, events: any) {
//   return {
//     type: actionType.EDIT_CALENDAR_EVENT,
//     payload: {id, ...events},
//   };
// }
