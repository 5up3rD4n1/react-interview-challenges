import {createContext} from 'react';

export interface TodoState {}
export interface TodoContextPayload {
  state: TodoState;
  dispatch: (value: any) => void;
}
export const TodoContetxt = createContext<TodoContextPayload>({
  state: {},
  dispatch: () => {},
});
