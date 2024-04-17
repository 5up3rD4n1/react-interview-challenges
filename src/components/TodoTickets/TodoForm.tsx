import {Description} from '@mui/icons-material';
import {useState} from 'react';

interface OnSubmitParams {
  tittle: string;
  description: string;
}

interface TodoFormParams {
  onSubmit: (params: OnSubmitParams) => void;
}
export function TodoForm(props: TodoFormParams) {
  const [tittle, setTittle] = useState('');
  const [description, setDescription] = useState('');

  function handleOnChanfeTittle(input: any) {
    setTittle(input.target.value);
  }

  function handleOnChangeDescription(input: any) {
    setDescription(input.target.value);
  }

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault();
    props.onSubmit({tittle, description});
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="tittle goes here"
          onChange={handleOnChanfeTittle}
        >
          Tittle
        </input>
        <input
          type="text"
          placeholder="description goes here"
          onChange={handleOnChangeDescription}
        >
          Description
        </input>
        <button type={'submit'}>Add Todo</button>
      </form>
    </>
  );
}
