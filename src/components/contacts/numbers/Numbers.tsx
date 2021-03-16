import React from 'react';


interface IProps {
  numbers: Array<string>
}

const Numbers = (props: IProps) => {
  return(
    <div>
      {props.numbers.map((number: string) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  )
}

export default Numbers;