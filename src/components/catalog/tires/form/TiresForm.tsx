import React from 'react';
import {reduxForm, Field} from "redux-form";
import styled from "styled-components";
import {Input} from "../../../general/form/FormControls";
import {maxLengthCreator} from "../../../../utility/validators/validators";


const Form_block = (props) => {
  return(
    <form className={props.className}>
      {props.children}
    </form>
  )
}

const FormBlock = styled(Form_block)`
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

const TiresForm = (props) => {
  return(
    <FormBlock
      onSubmit={props.handleSubmit}
      >
      <Field
        name={"tireName"}
        id={"tireName"}
        component={"input"}
        placeholder={"Поиск"}
        validate={[MaxLength]}
      />
      <button>
        Найти
      </button>
    </FormBlock>
  )
}

export default reduxForm({form: "tiresSearch"})(TiresForm);