import {useState} from 'react';

interface CounterButtonProps {
  onClick: (num: number) => void;
  num: number;
}

interface CounterCountProps {
  count: number;
}

interface CounterInputProps {
  onChange: (event: React.ChangeEvent<{value: string}>) => void;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const [countInput, setCountInput] = useState(0);

  function handleOnClickDecrease(num: number) {
    setCount(count - num);
  }

  function handleOnClickIncrease(num: number) {
    setCount(count + num);
  }

  function handleInputOnChange(input: React.ChangeEvent<{value: string}>) {
    const num = Number(input.target.value);
    setCountInput(num);
  }

  return (
    <div>
      <Decrease num={countInput} onClick={handleOnClickDecrease} />
      <br />
      <Increase num={countInput} onClick={handleOnClickIncrease} />
      <br />
      <Count count={count} />
      <InputCount onChange={handleInputOnChange} />
    </div>
  );
}

function Decrease(props: CounterButtonProps) {
  const handleOnClick = () => {
    props.onClick(props.num);
  };

  // function button(props: {onChange: (e: any) => void}) {
  //   // function handleClick(e) {
  //   //  props.onClick(e)
  //   //}
  //   // window.addEventListener('click', handleClick);
  // }

  return (
    <div>
      <button onClick={handleOnClick}>decrease</button>
    </div>
  );
}

function Increase(props: CounterButtonProps) {
  return (
    <div>
      <button onClick={() => props.onClick(props.num)}>Increase</button>
    </div>
  );
}

function Count(props: CounterCountProps) {
  return <div>{props.count}</div>;
}

function InputCount(props: CounterInputProps) {
  return (
    <div>
      <input type="number" onChange={props.onChange}></input>
    </div>
  );
}
