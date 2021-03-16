import React from 'react';
import Numbers from "./Numbers";
import {useSelector} from "react-redux";
import {ReducerType} from "../../../redux/reducer";


const NumbersContainer = () => {
  const numbers: Array<string> = useSelector((state: ReducerType) => state.CompanyInfoData.numbers);

  return(
    <Numbers
      numbers={numbers}
    />
  )
}

export default NumbersContainer;