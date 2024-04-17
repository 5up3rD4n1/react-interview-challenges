import {CalendarPickerState} from '../components/CalendarContext';
import {EventActionType} from './action-type';

export function reducer(
  state: CalendarPickerState,
  action: Record<string, any>
) {
  if (action.type === EventActionType.SET_DATE) {
    return {...state, date: action.payload};
  }

  if (action.type === EventActionType.SET_VISIBLE) {
    return {...state, isVisible: action.payload};
  }

  if (action.type === EventActionType.SAVE_EVENT) {
    return {
      ...state,
      events: {
        ...state.events,
        [action.payload.eventId]: action.payload.eventReminder,
      },
    };
  }

  if (action.type === EventActionType.CLEAR_EVENT) {
    return {
      ...state,
      events: {...state.events, [action.payload.eventId]: null},
    };
  }

  if (action.type === EventActionType.UPDATE_EVENT) {
    return {
      ...state,
      events: {
        ...state.events,
        [action.payload.eventId]: action.payload.eventReminder,
      },
    };
  }

  return state;
}
