import {createContext} from 'react';

export interface TodoState {
  todos: {id: string; tittle: string; description: string};
  done: boolean;
}
export interface TodoContextPayload {
  state: TodoState;
  dispatch: (value: any) => void;
}
export const TodoContext = createContext<TodoContextPayload>({
  state: {
    todos: {id: '01', tittle: 'Hello', description: 'Hello description'},
    done: true,
  },
  dispatch: () => {},
});
