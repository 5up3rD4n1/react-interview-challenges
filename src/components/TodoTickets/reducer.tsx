import {TodoState} from './TodoContext';

export function reducer(state: TodoState, action: Record<string, any>) {
  if (action.type === 'ADD_TODO') {
    return {...state, todo: action.payload};
  }
  if (action.type === 'DELETE_TODO') {
    return {...state, todo: action.payload};
  }
}
