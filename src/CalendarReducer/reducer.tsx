import {CalendarPickerState} from '../components/CalendarContext';

export function reducer(
  state: CalendarPickerState,
  action: Record<string, any>
) {
  if (action.type === 'SET_DATE') {
    return {...state, date: action.payload};
  }

  return state;
}
