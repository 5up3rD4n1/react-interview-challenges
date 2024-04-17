import {useState} from 'react';

export function TodoList() {
  const [todos, setTodos] = useState(['hello', 'bye']);
  return (
    <>
      <h1>TodoList</h1>
      {todos.map(todo => {
        <>
          <li>{todo}</li>
        </>;
      })}
    </>
  );
}
