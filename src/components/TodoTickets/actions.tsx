import {TodoActionType} from './action-type';

export interface Action<T> {
  type: TodoActionType;
  payload: T;
}

export function addTodo(todo: string | null) {
  return {type: 'ADD_TODO', payload: todo};
}

export function deleteTodo(id: string) {
  return {type: 'DELETE_TODO', payload: id};
}
