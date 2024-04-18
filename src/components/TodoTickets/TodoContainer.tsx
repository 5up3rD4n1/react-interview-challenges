import {useContext} from 'react';
import {TodoContext} from './TodoContext';
import {TodoItem} from './TodoItem';
import {addTodo} from './reducer/actions';

export function TodoContainer() {
  const {state, dispatch} = useContext(TodoContext);

  function handleOnClickAdd() {}
  return (
    <>
      <main>
        <div>{JSON.stringify(state.todos.id)}</div>
        <div>{JSON.stringify(state.todos.tittle)}</div>
        <div>{JSON.stringify(state.todos.description)}</div>
        <button>Add</button>
        <TodoItem />
      </main>
    </>
  );
}
