import {TodoActionType} from './action-type';

export interface Action<T> {
  type: TodoActionType;
  payload: T;
}

export function addTodo(params: {tittle: string; description: string}) {
  return {type: TodoActionType.ADD_TODO, payload: params};
}

export function deleteTodo(params: {todoId: string}) {
  return {type: TodoActionType.DELETE_TODO, payload: params};
}
