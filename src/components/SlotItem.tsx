import {useState} from 'react';

interface SlotItemData {
  [key: string]: string | null;
}

interface SlotItemsProps {
  data: SlotItemData;
  onDeleteClick: (params: {slot: string}) => void;
}

export function SlotItem(props: SlotItemsProps) {
  const {data} = props;

  const [slots, setSlots] = useState(new Array(10).fill(null));

  function handlerOnClickAddNewSlot() {
    setSlots([...slots, null]);
  }

  return (
    <div>
      <button onClick={handlerOnClickAddNewSlot}>add new slot</button>
      <ul>
        {slots.map((_, index) => {
          // {'5': 'lkasdas', '1': 'Hello'} => data['1'] => 'Hello

          const stringIndex = `${index + 1}`;
          const description = data[stringIndex];

          return (
            <li key={index}>
              Slot: {index + 1} {description}
              {description ? (
                <button
                  onClick={() => {
                    props.onDeleteClick({slot: stringIndex});
                  }}
                >
                  X
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
