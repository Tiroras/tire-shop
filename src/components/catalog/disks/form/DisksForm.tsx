import React from 'react'
import {reduxForm, Field} from "redux-form";
import {Input} from "../../../general/form/FormControls";
import {maxLengthCreator} from "../../../../utility/validators/validators";
import styled from "styled-components";


const FormBlock = styled.form`
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
const StyledInput = styled(Input)`
  width: 100%;
`;

const MaxLength = maxLengthCreator(40);


const DisksForm = (props) => {
  return(
    <FormBlock onSubmit={props.handleSubmit}>
      <Field
        name={"diskName"}
        id={"diskName"}
        component={"input"}
        placeholder={"Поиск"}
        validate={[MaxLength]}
      />
      <button onClick={() => console.log("Tuturu")}>
        Найти
      </button>
    </FormBlock>
  )
}

export default reduxForm({form: "disksSearch"})(DisksForm);