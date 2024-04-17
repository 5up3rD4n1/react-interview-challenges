import {TodoForm} from './TodoForm';
import {addTodo} from './actions';

export function TodoItem() {
  function onFormSubmit(params: {tittle: string; description: string}) {}
  return (
    <>
      <h1>TodoItem</h1>
      <TodoForm onSubmit={onFormSubmit} />
    </>
  );
}
