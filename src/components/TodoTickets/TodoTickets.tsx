import {useReducer} from 'react';
import {TodoContext} from './TodoContext';
import {reducer} from './reducer/reducer';
import {Todo} from './Todo';
import {Done} from './Done';

export default function TodoTickets() {
  const [state, dispatch] = useReducer(reducer, {
    todos: {
      id: '01',
      tittle: 'Hello',
      description: 'this is hello description',
    },
    done: true,
  });
  return (
    <>
      <main>
        <div>
          <a href="/">index</a>
        </div>
        <h1>Todo Tickets</h1>
        <TodoContext.Provider value={{state, dispatch}}>
          <div className="split left">
            <div className="centered">
              {' '}
              <Todo />
            </div>
          </div>
          <div className="split right">
            <div>
              <Done />
            </div>
          </div>
        </TodoContext.Provider>
      </main>
    </>
  );
}
