import {useState} from 'react';

interface OnSubmitParams {
  hour: string;
  eventReminder: string;
}

interface EventFormProps {
  onSubmit: (params: OnSubmitParams) => void;
}

export function EventForm(props: EventFormProps) {
  const [hour, setHourInput] = useState('');
  const [eventReminder, setEventReminder] = useState('');

  function handleOnChangeEventInput(input: any) {
    setHourInput(input.target.value);
  }

  function handleOnChangeEventReminder(input: any) {
    setEventReminder(input.target.value);
  }

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault();
    props.onSubmit({hour, eventReminder});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="x number"
          onChange={handleOnChangeEventInput}
        ></input>
        <input
          type="text"
          placeholder="text goes here"
          onChange={handleOnChangeEventReminder}
        ></input>
        <button type={'submit'}>create event</button>
      </form>
    </div>
  );
}
