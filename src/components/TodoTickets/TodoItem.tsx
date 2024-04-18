import {useContext, useState} from 'react';
import {TodoForm} from './TodoForm';
import {addTodo} from './reducer/actions';
import {TodoContext} from './TodoContext';
import {title} from 'process';

export function TodoItem() {
  const {state, dispatch} = useContext(TodoContext);

  const [activeTodo, setActiveTodo] = useState<string | null>(null);

  function handleOnFormSubmit(params: {tittle: string; description: string}) {
    dispatch(addTodo(params));
  }

  return (
    <>
      <h1>TodoItem</h1>

      <TodoForm
        onSubmit={(params: {tittle: string; description: string}) => {
          handleOnFormSubmit({
            tittle: params.tittle,
            description: params.description,
          });
          setActiveTodo(null);
        }}
        onCloseClick={() => {
          setActiveTodo(null);
        }}
        initialValue={(state.todos.tittle, state.todos.description)}
      />
    </>
  );
}
