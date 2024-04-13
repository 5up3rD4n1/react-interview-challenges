import {CalendarPickerState} from '../components/CalendarContext';

export function reducer(
  state: CalendarPickerState,
  action: Record<string, any>
) {
  if (action.type === 'SET_DATE') {
    return {...state, date: action.payload};
  }
  if (action.type === 'ONCLICK_SELECTED') {
    return {...state, id: action.payload};
  }
  if (action.type === 'SET_VISIBLE') {
    return {...state, isVisible: action.payload};
  }

  return state;
}
