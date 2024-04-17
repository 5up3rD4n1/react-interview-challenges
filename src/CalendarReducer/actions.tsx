import {DateTime} from 'luxon';
import {EventActionType} from './action-type';

export interface Action<T> {
  type: EventActionType;
  payload: T;
}
export function setDate(date: DateTime | null) {
  return {type: 'SET_DATE', payload: date};
}

export function setSelected(id: string | null) {
  return {type: 'ONCLICK_SELECTED', payload: id};
}

export function setVisible(isVisible: boolean) {
  return {type: 'SET_VISIBLE', payload: isVisible};
}

export function saveEvent(params: {eventId: string; eventReminder: string}) {
  return {type: EventActionType.SAVE_EVENT, payload: params};
}

export function clearEvent(params: {eventId: string}) {
  return {type: EventActionType.CLEAR_EVENT, payload: params};
}
