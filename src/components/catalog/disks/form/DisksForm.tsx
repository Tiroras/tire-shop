import React from 'react'
import {reduxForm, Field} from "redux-form";
import {Input} from "../../../general/form/FormControls";
import {maxLengthCreator} from "../../../../utility/validators/validators";
import styled from "styled-components";


const FormBlock = (props) => {
  return(
    <form className={props.className}>
      {props.children}
    </form>
  )
}

const StyledFormBlock = styled(FormBlock)`
  background-color: #3e94d1;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 6vh auto;
  padding: 4vh 3vw;
  border: 2px solid #a9a9a9;
  border-radius:10px;
  width: 410px;
`;

const MaxLength = maxLengthCreator(40);

const DisksForm = (props) => {
  return(
    <StyledFormBlock
      onSubmit={props.handleSubmit}
    >
      <Field
        name={"diskName"}
        id={"diskName"}
        component={"input"}
        placeholder={"Поиск"}
        validate={[MaxLength]}
      />
      <button>
        Найти
      </button>
    </StyledFormBlock>
  )
}

export default reduxForm({form: "disksSearch"})(DisksForm);