import React from 'react';
import TopHeader from "../TopHeader";
import {useSelector} from "react-redux";
import {ReducerType} from "../../../../../../../redux/reducer";


const TopHeaderContainer = () => {
  const number = useSelector((state: ReducerType) => state.CompanyInfoData.numbers[2]);

  return(
    <TopHeader
      number={number}
    />
  )
}

export default TopHeaderContainer;