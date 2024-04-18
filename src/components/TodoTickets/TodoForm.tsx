import {useState} from 'react';

interface OnSubmitParams {
  tittle: string;
  description: string;
}

interface TodoFormParams {
  onSubmit: (params: OnSubmitParams) => void;
  onCloseClick: () => void;
  initialValue: string;
}
export function TodoForm(props: TodoFormParams) {
  const [tittle, setTittle] = useState(props.initialValue);
  const [description, setDescription] = useState(props.initialValue);

  function handleOnChangeTittle(input: any) {
    setTittle(input.target.value);
  }

  function handleOnChangeDescription(input: any) {
    setDescription(input.target.value);
  }

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault();

    props.onSubmit({tittle, description});
  }

  function handleCloseClick(event: React.FormEvent<any>) {
    event.preventDefault();
    props.onCloseClick();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Tittle</label>
        <br />
        <input
          value={tittle}
          type="text"
          placeholder="tittle goes here"
          onChange={handleOnChangeTittle}
        />{' '}
        <br />
        <br />
        <label>Description</label>
        <br />
        <input
          value={description}
          type="text"
          placeholder="description goes here"
          onChange={handleOnChangeDescription}
        />{' '}
        <br />
        <br />
        <button type={'submit'}>create</button>
        <button onClick={handleCloseClick}>close</button>
      </form>
    </>
  );
}
