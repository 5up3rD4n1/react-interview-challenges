import {createContext} from 'react';

// export const DateContext = createContext(
//   DateTime.now().setLocale('es').setZone('America/Costa_Rica')
// );

export interface CalendarPickerContextPayload {
  state: CalendarPickerState;
  dispatch: (value: any) => void;
}

export interface CalendarPickerState {
  date: string | null;
}
export const CalendarPickerContext =
  createContext<CalendarPickerContextPayload>({
    state: {date: null},
    dispatch: () => {},
  });
