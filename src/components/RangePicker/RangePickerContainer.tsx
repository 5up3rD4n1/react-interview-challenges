import {createContext, useContext, useReducer} from 'react';

interface RangePickerContextPayload {
  state: RangePickerState;
  dispatch: (value: any) => void;
}

interface RangePickerState {
  lower: number | null;
  upper: number | null;
}

const RangePickerContext = createContext<RangePickerContextPayload>({
  state: {lower: null, upper: null},
  dispatch: () => {},
});

function reducer(state: RangePickerState, action: Record<string, any>) {
  if (action.type === 'SET_LOWER') {
    return {...state, lower: action.payload};
  }
  if (action.type === 'SET_UPPER') {
    return {...state, upper: action.payload};
  }
  return state;
}

function setLower(num: number | null) {
  return {type: 'SET_LOWER', payload: num};
}

function setUpper(num: number | null) {
  return {type: 'SET_UPPER', payload: num};
}

export default function RangePickerContainer() {
  const [state, dispatch] = useReducer(reducer, {lower: null, upper: null});

  function handleInputChange(event: React.ChangeEvent<any>) {
    // dispatch(event.target.value);
  }

  return (
    <div>
      <RangePickerContext.Provider value={{state, dispatch}}>
        <RangePickerInput
          label="lower"
          value={state.lower}
          onInputChange={handleInputChange}
        />

        <RangePickerInput
          label="upper"
          value={state.upper}
          onInputChange={handleInputChange}
        />

        <RangeList />

        <RangePickerDisplay />
      </RangePickerContext.Provider>
    </div>
  );
}

interface RangePickerInputProps {
  label: string;
  value: number | null;
  onInputChange: (event: React.ChangeEvent<any>) => void;
}

function RangePickerInput(props: RangePickerInputProps) {
  return (
    <div>
      <label>{props.label} </label>
      <input value={props.value || ''} onChange={props.onInputChange}></input>
    </div>
  );
}

function RangePickerDisplay() {
  const {state} = useContext(RangePickerContext);
  return (
    <>
      <div>
        <div>Lower: {state.lower}</div>
        <div>Upper: {state.upper}</div>
      </div>
    </>
  );
}

function RangeList() {
  const {state, dispatch} = useContext(RangePickerContext);
  const nums = new Array(10).fill(null);

  function handleButtonClick(num: number) {
    if (state.lower === null) {
      dispatch(setLower(num));
      return;
    }

    if (state.lower !== null && num < state.lower) {
      dispatch(setLower(num));
      return;
    }

    if (state.upper === null) {
      dispatch(setUpper(num));
      return;
    }

    if (state.lower !== null && state.upper !== null) {
      dispatch(setLower(num));
      dispatch(setUpper(null));
    }
  }

  return (
    <div>
      {nums.map((num, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleButtonClick(index + 1);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
