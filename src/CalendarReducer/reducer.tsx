import {CalendarPickerState} from '../components/CalendarContext';

export function reducer(
  state: CalendarPickerState,
  action: Record<string, any>
) {
  if (action.type === 'SET_LOWER') {
    return {...state, lower: action.payload};
  }
  if (action.type === 'SET_UPPER') {
    return {...state, upper: action.payload};
  }
  return state;
}
