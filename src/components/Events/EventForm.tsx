import {useState} from 'react';

interface OnSubmitParams {
  eventReminder: string;
}

interface EventFormProps {
  onSubmit: (params: OnSubmitParams) => void;
  onCloseClick: () => void;
  initialValue?: string | null;
}

export function EventForm(props: EventFormProps) {
  const [eventReminder, setEventReminder] = useState<string | undefined | null>(
    props.initialValue
  );

  function handleOnChangeEventReminder(input: any) {
    setEventReminder(input.target.value);
  }

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault();
    if (eventReminder && eventReminder !== '') {
      props.onSubmit({eventReminder});
    }
  }

  function handleCloseClick(event: React.MouseEvent) {
    event.preventDefault();
    props.onCloseClick();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={eventReminder || ''}
          type="text"
          placeholder="text goes here"
          onChange={handleOnChangeEventReminder}
        ></input>
        <button type={'submit'}>
          {props.initialValue ? 'update' : 'create'} event
        </button>
        <button onClick={handleCloseClick}>close</button>
      </form>
    </div>
  );
}
