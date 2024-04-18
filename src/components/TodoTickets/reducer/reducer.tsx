import {TodoState} from '../TodoContext';
import {TodoActionType} from './action-type';

export function reducer(state: TodoState, action: Record<string, any>) {
  if (action.type === TodoActionType.ADD_TODO) {
    return {...state, todo: action.payload};
  }
  if (action.type === TodoActionType.DELETE_TODO) {
    return {...state, todo: action.payload};
  }
  return state;
}
