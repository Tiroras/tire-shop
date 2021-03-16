import React from 'react';
import Emails from "./Emails";
import {useSelector} from "react-redux";
import {ReducerType} from "../../../redux/reducer";


const EmailsContainer = () => {
  const emails: Array<string> = useSelector((state: ReducerType) => state.CompanyInfoData.emails);

  return(
    <Emails emails={emails} />
  )
}

export default EmailsContainer;