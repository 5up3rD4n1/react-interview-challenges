import {useState} from 'react';

interface OnSubmitParams {
  slot: string;
  description: string;
}

interface SlotFormProps {
  onSubmit: (params: OnSubmitParams) => void;
}

export function SlotForm(props: SlotFormProps) {
  const [slot, setSlotInput] = useState('');
  const [description, setDescription] = useState('');

  function handleOnChangeSlotInput(input: any) {
    setSlotInput(input.target.value);
  }

  function handleOnChangeDescription(input: any) {
    setDescription(input.target.value);
  }

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault();
    props.onSubmit({slot, description});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="slot number"
          onChange={handleOnChangeSlotInput}
        ></input>
        <input
          type="text"
          placeholder="text goes here"
          onChange={handleOnChangeDescription}
        ></input>
        <button type={'submit'}>add</button>
      </form>
    </div>
  );
}
