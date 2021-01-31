import React from 'react';


interface IProps {
  value: number;
  counter: (operation: string) => any;
}

const Counter = (props: IProps) => {
  return(
    <span>
      <button onClick={props.counter("+")}>+</button>
      <span>{props.value}</span>
      <button onClick={props.counter("-")}>-</button>
    </span>
  )
}

export default Counter;