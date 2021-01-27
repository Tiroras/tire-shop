import React from 'react';
import styled from "styled-components";


interface IProps {
  error: string;
}

const ErrorBlock = styled.span`
  padding: 1vh 1vw;
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  background-color: gray;
`

const ErrorValidateMessage = (props: IProps) => {
  return(
    <ErrorBlock>
      {props.error}
    </ErrorBlock>
  )
}

export default ErrorValidateMessage;