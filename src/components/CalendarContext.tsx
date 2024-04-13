import {DateTime} from 'luxon';
import {createContext} from 'react';

export const DateContext = createContext(
  DateTime.now().setLocale('es').setZone('America/Costa_Rica')
);

export interface CalendarPickerContextPayload {
  state: CalendarPickerState;
  dispatch: (value: any) => void;
}

export interface CalendarPickerState {
  date: DateTime;
  id: string | null;
  isVisible: boolean;
}
export const CalendarPickerContext =
  createContext<CalendarPickerContextPayload>({
    state: {date: DateTime.now(), id: null, isVisible: false},
    dispatch: () => {},
  });
