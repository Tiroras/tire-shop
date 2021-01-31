import React, {useState} from 'react';
import Counter from "./Counter";


const CounterContainer = () => {
  const [count, setCounter] = useState<number>(0);

  const counter = (operation: string) => {
    switch (operation) {
      case "+": {
        return setCounter(count+1)
      }
      case "-": {
        if(count === 0){
          return setCounter(0);
        }
        return setCounter(count-1)
      }
      default: return count;
    }
  }

  return(
    <Counter
      value={count}
      counter={counter}
    />
  )
}

export default CounterContainer;