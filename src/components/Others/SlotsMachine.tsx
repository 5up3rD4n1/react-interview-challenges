import {useState, useReducer} from 'react';
import {SlotForm} from './SlotForm';
import {SlotItem} from './SlotItem';
// {'1': 'lkajslkdas', '2': 'kaisjdiasd'}
interface ReducerState {
  [key: string]: string | null;
}

enum SlotActionType {
  SAVE_SLOT = 'SAVE_SLOT',
  CLEAR_SLOT = 'CLEAR_SLOT',
}

interface Action<T> {
  type: SlotActionType;
  payload: T;
}

// interface AddSlotPayload {
//   slot: number;
//   description: string;
// }

// interface RemoveSlotPayload {
//   slot: string;
// }

// type SlotReducerAction = AddSlotPayload | RemoveSlotPayload;

function reducer(state: ReducerState, action: Action<any>): ReducerState {
  if (action.type === SlotActionType.SAVE_SLOT) {
    return {...state, [action.payload.slot]: action.payload.description};
  }

  if (action.type === SlotActionType.CLEAR_SLOT) {
    return {...state, [action.payload.slot]: null};
  }

  return state;
}

function saveSlot(params: {slot: string; description: string}) {
  return {type: SlotActionType.SAVE_SLOT, payload: params};
}

function clearSlot(params: {slot: string}) {
  return {type: SlotActionType.CLEAR_SLOT, payload: params};
}

export default function SlotsMachine() {
  const [state, dispatch] = useReducer(reducer, {});

  function onFormSubmit(params: {slot: string; description: string}) {
    dispatch(saveSlot(params));
  }

  function onDeleteClick(params: {slot: string}) {
    dispatch(clearSlot(params));
  }

  console.log({state});

  return (
    <div>
      <SlotForm onSubmit={onFormSubmit} />
      <SlotItem data={state} onDeleteClick={onDeleteClick} />
    </div>
  );
}
